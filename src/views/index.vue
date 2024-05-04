<template>
	<!-- 视频播放 -->
	<div class="videoPlay">
		<div class="video-main"> 
			<div
				id="container"
				class="video-js vjs-default-skin"
				style="width: 100%; height: 90%; object-fit: fill"
			></div>
		</div>
		<div v-if="text !== ''" class="video-text">{{ text }}</div>
		<div class="video-btn flex">
			<div style="width: 40%;  " class="flex">
				<img
					v-show="isVideoPause"
					@click="pauseVideo"
					src="@/assets/images/pause.png"
					alt="暂停"
				/>
				<img
					@click="play"
					v-show="!isVideoPause"
					src="@/assets/images/start.png"
					alt="播放"
				/> 
			</div>
		</div>
	</div>
</template>

<script> 

var jessibuca = null;
	export default {
		name: 'index',
		data: function () {
			return {
				isVideoPause: null,
				text: '',
				winData: null, 
			};
		},
		created() {}, 
		mounted() {
			if (typeof WebAssembly === undefined) {
				this.$message.info('不支持WebAssembly,可能无法播放视频 正在尝试...');
				this.text = '可能无法播放视频 正在尝试...';
				setTimeout(() => {
					this.text = '';
				}, 2000);
			}
			var $container = document.getElementById('container');
			jessibuca = new Jessibuca({
				container: $container,
				demuxUseWorker: true,
				dumpFlvStream: false,
				hasAudio: false,
				operateBtns: {fullscreen: true},
				// 解码
				useMSE: true,
				useWCS: true,
				useSIMD: true,
				videoName: new Date().getTime(),
				isStream: true, //true 直播 false 录播
				isResize: false,
				text: '',
				loadingText: '加载中',
				debug: false,
				debugLevel: 'debug',
				// 显示网速
				showKBS: true,
				// // 显示性能
				showPerformance: false,
				loadingTimeout: 30, // 播放过程中，超时重连时，是否使用最后一帧来显示
				loadingTimeoutReplay: true, //是否开启loading超时之后自动再播放
				loadingTimeoutReplayTimes: 2, // 重连次数
				heartTimeout: 5, // 播放过程中超时时间 重连
				heartTimeoutReplayTimes: 3, // 重试次数
				// 当为true的时候：ws协议不检验是否以.flv为依据，进行协议解析。
				isFlv: true,
				isNotMute: false,
				// 播放过程中，超时重连时，是否使用最后一帧来显示。
				heartTimeoutReplayUseLastFrameShow: true,
				supportDblclickFullscreen: true
			}); 
		},
		methods: { 
			//视频播放失败 报错
			errorPlay() {
				this.$emit('errorPlay', false);
				jessibuca.destroy();
			},
			//播放视频 // 开始播放
			play() { 
					let that = this;
					let url = 'https://live.nodemedia.cn:8443/live/b480_264.flv';
					jessibuca.play(url);
					this.isVideoPause = true;
					jessibuca.on('error', function (error) {
						that.$message.error('播放失败');
						that.errorPlay();
						console.log('error:', error);
					}); 
			},
			// 暂停
			pauseVideo() {
				let that = this;
				jessibuca
					.pause()
					.then(() => {
						this.isVideoPause = false;
						console.log('pause success');
						that.stopVideo();
					})
					.catch((e) => {
						this.isVideoPause = true;
						console.log('pause error', e);
					});
			},
			// 停止预览
			async stopVideo() {
			},  
		},
		beforeDestroy() {
			this.errorPlay();
			this.stopVideo();
		}
	};
</script>

<style lang="scss" scoped>
	.flex {
		display: flex;
		align-items: center;
	}
	.videoPlay {
		width: calc(100% - 8%);
		height: calc(100% - 8%);
		padding: 4% 4%;
		overflow: auto;
		color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1%;
	}
	.video-main {
		width: 100%;
		height: 40%;
		background: rgba(10, 31, 79, 0.5);
		border-radius: 4px;
		border: 1px solid rgba(0, 174, 255, 0.5);
		overflow: hidden;
	}
	.video-name {
		width: 96%;
		height: 10%;
		padding: 0 2%;
		display: flex;
		align-items: center;
		color: #38aadf;
	}

	.videoChange ::v-deep {
		width: 100%;
		height: 100%;
		video {
			width: 100%;
			height: 100%;
		}
		.video-js .vjs-tech {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: fill;
		}

		.jessibuca-container .jessibuca-controls {
			background-color: transparent;
		}
	}
	.video-text {
		width: 96%;
		height: 24px;
		border: 1px solid rgba(0, 174, 255, 0.5);
		line-height: 24px;
		padding: 0 2%;
		margin-top: 14px;
		border-radius: 5px;
	}
	.video-btn {
		width: 100%;
		height: 50px;
		margin-top: 2%;
		background: rgba(10, 31, 79, 0.5);
		border-radius: 4px;
		border: 1px solid rgba(0, 174, 255, 0.5);
	}

 
</style>
