<template>
  <div class="comment">
    <el-row>
      <span style="position: absolute; right: 20px; color: #888888">{{ commentData.date }}</span>
      <div style="position: absolute;">
        <el-avatar :size="50">
          <img id="avatar" :src="commentData.avatar" style="width: 50px" alt="">
        </el-avatar>
      </div>
      <div style="margin-left: 70px;">
        <div style="height: 30px; margin-top: 10px">
          <div style="font-weight: bold; margin-bottom: 10px; float: left">
            {{ commentData.nickname }}
          </div>
          <div style="float:left; margin-left: 30px">
            <el-rate
                v-model="commentData.stars"
                :colors="colors"
                disabled>
            </el-rate>
          </div>
        </div>
        <div class="comment-content">
          {{ commentData.content }}
        </div>
      </div>
      <div>
        <div style="width: 100px; float: right">
          <i class="iconfont icon-ali-cai icons" ref="cai" style="position: relative; top: 2px;" @click="cai"></i>
          <span style="font-size: 20px; float: left;"> ({{ commentData.numOfCai }})</span>
        </div>
        <div style="width: 100px; float: right">
          <i class="iconfont icon-ali-zan icons" ref="zan" @click="zan"></i>
          <span style="font-size: 20px; float: left;"> ({{ commentData.numOfZan }})</span>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: ['data'],
  data() {
    return {
      commentData: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      zanClicked: false,
      caiClicked: false
    }
  },
  methods: {
    zan() {
      if (this.caiClicked) {
        if (!this.zanClicked) {
          this.zanClicked = true;
          this.commentData.numOfZan++;
          this.caiClicked = false;
          this.commentData.numOfCai--;
          this.$refs.zan.style.color = 'rgb(18,150,219)';
          this.$refs.cai.style.color = 'black';
        } else {
          this.zanClicked = false;
          this.commentData.numOfZan--;
          this.$refs.zan.style.color = 'black';
        }
      } else {
        this.zanClicked = !this.zanClicked;
        if (this.zanClicked) {
          this.commentData.numOfZan++;
          this.$refs.zan.style.color = 'rgb(18,150,219)';
        } else {
          this.commentData.numOfZan--;
          this.$refs.zan.style.color = 'black';
        }
      }
    },
    cai() {
      if (this.zanClicked) {
        if (!this.caiClicked) {
          this.caiClicked = true;
          this.commentData.numOfCai++;
          this.zanClicked = false;
          this.commentData.numOfZan--;
          this.$refs.cai.style.color = 'rgb(18,150,219)';
          this.$refs.zan.style.color = 'black';
        } else {
          this.caiClicked = false;
          this.numOfCai--;
          this.$refs.cai.style.color = 'black';
        }
      } else {
        this.caiClicked = !this.caiClicked;
        if (this.caiClicked) {
          this.commentData.numOfCai++;
          this.$refs.cai.style.color = 'rgb(18,150,219)';
        } else {
          this.commentData.numOfCai--;
          this.$refs.cai.style.color = 'black';
        }
      }
    }
  },
  created() {
    this.commentData = this.data;
  }
}
</script>

<style scoped>
.comment {
  background-color: #eeeeee;
  border-radius: 15px;
  padding: 20px;
  margin: 20px 0;
}

.comment-content {
  word-wrap: break-word;
  padding: 20px 0;

}

/* 评论区头像旋转 */
#avatar:hover {
  -webkit-transform: rotateZ(360deg);
  -moz-transform: rotateZ(360deg);
  -ms-transform: rotateZ(360deg);
  -o-transform: rotateZ(360deg);
  transform: rotateZ(360deg);
}

#avatar {
  -webkit-transition: all 0.6s ease-out;
  -moz-transition: all 0.5s ease-out;
  -ms-transition: all 0.5s ease-out;
  -o-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}

.icons {
  margin: 0 5px;
  font-size: 22px;
  float: left;
}

.icons:active {
  -webkit-transform: scale(1.2) translateY(1px) translateX(1px);
  -moz-transform: scale(1.2) translateY(1px) translateX(1px);
  transform: scale(1.2) translateY(1px) translateX(1px);
}
</style>