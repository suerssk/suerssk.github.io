<template>
  <div class="date-picker" v-click-outside>
      <!-- input框 -->
      <div class="picker-input">
        <i class="iconfont icon-date"></i>
        <input type="text" :value="chooseDate">
      </div>
      <!-- 日期展示区 -->
      <div class="picker-panel" v-if="showPanel">
        <div class="picker-arrow"></div>
        <div class="picker-body">
          <div class="picker-header">
            <span class="picker-btn iconfont icon-prev-year" @click="changeYear('prev')"></span>
            <span class="picker-btn iconfont icon-prev-month" @click="changeMonth('prev')"></span>
            <span class="picker-date">{{ showDate.year }}年{{ showDate.month+1 }}月</span>
            <span class="picker-btn iconfont icon-next-month" @click="changeMonth('next')"></span>
            <span class="picker-btn iconfont icon-next-year" @click="changeYear('next')"></span>
          </div>
          <div class="picker-content">
            <div class="picker-weeks">
              <span v-for="week in ['日','一','二','三','四','五','六']" :key="week">{{ week }}</span>
            </div>
            <div class="picker-days">
              <span v-for="day in showDays" :key="day.getTime()"
                :class="{
                  'other-month': !isCur(day).month,
                  'is-select': isCur(day).select,
                  'is-today': isCur(day).today
                }"
                @click="onChooseDate(day)"
              >{{ day.getDate() }}</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  directives: {
    "click-outside": {
      bind(el, binding, vnode){
        const vm = vnode.context;
        document.addEventListener("click", function(e){
          const dom = e.target;
          const isElSon = el.contains(dom);

          if(isElSon && !vm.showPanel){
            vm.changePanel(true);
          }else if(!isElSon && vm.showPanel) {
            vm.changePanel(false);
          }
        }, false);
      }
    }
  },
  props: {
    date: {
      type: Date,
      default: () => new Date()
    }
  },
  model: {
    prop: "date",
    event: "choose-date"
  },
  computed: {
    // 计算属性
    chooseDate(){ // input 框绑定的日期
      const { year, month, day } = this.getYearMonthDay(this.date); // 由父组件传递而来的date值，获取年月日
      return `${ year }-${ month+1 }-${ day }`;
    },
    showDays(){ // picker-content 区展示的日期
      const { year, month } = this.showDate,
        firstDay = new Date(year, month, 1),  // year年month月的第一天
        week = firstDay.getDay(), // 第一天星期几
        num = 24 * 60 * 60 * 1000,  // 一天的毫秒数
        startDay = + firstDay - week * num, // 日历开始的那天
        days = []; // 存储日历显示区日期 Date 对象
      for (let i = 0; i < 42; i++) {
        days.push(new Date( startDay + i * num ));
      }
      return days;
    }
  },
  data () {
    return {
      showPanel: false,
      showDate: {
        year: 0,
        month: 0,
        day: 0
      }
    }
  },
  created(){
    this.getShowDate(this.date);
  },
  methods: {
    changePanel(flag){
      this.showPanel = flag;
    },
    changeYear(type){
      const moveYear = type === "prev" ? -1 : 1;
      this.showDate.year += moveYear;
      
    },
    changeMonth(type){
      const moveMonth = type === "prev" ? -1 : 1;
      /** 
       * 自控制处理年月
      const minMonthIndex = 0,
        maxMonthIndex = 11;
      let { year, month } = this.showDate;
      month += moveMonth;
      if(month < minMonthIndex){
        month = maxMonthIndex;
        year --;
      }else if(month > maxMonthIndex){
        month = minMonthIndex;
        year ++;
      }
      this.showDate.month = month;
      this.showDate.year = year;
      */

     /**
      * 利用 Date() 对象的方法: setMonth() 等
      */
      const { year, month, day } = this.showDate,
        showDate = new Date(year, month, day);
      showDate.setMonth(month + moveMonth); // 设置月份
      const { year:showYear, month:showMonth } = this.getYearMonthDay(showDate);
      this.showDate.year = showYear;
      this.showDate.month = showMonth;
    },
    getShowDate(date){
      const { year, month, day } = this.getYearMonthDay(date);
      this.showDate = {
        year,
        month,
        day
      }
    },
    getYearMonthDay(date){
      const year = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDate();
      return {
        year,
        month,
        day
      }
    },
    isCur(date){ // 判定 picker-content 区给予 class 的条件
      const chooseDate = new Date(this.chooseDate),
        { year, month, day } = this.getYearMonthDay(date), // 日历展示区(picker-content)展示的日期每天对应的年月日
        { year:showYear, month:showMonth } = this.showDate, // 当前展示的日期对应的年和月
        { year:curYear, month:curMonth, day:curDay } = this.getYearMonthDay(new Date()), // 当前时刻对应的年月日
        { year:chooseYear, month:chooseMonth, day:chooseDay } = this.getYearMonthDay(chooseDate); // 父级传递过来展示被选中的年月日
      return {
        month: year === showYear && month === showMonth,
        select: year === chooseYear && month === chooseMonth && day === chooseDay,
        today: year === curYear && month === curMonth && day === curDay
      }
    },
    onChooseDate(date){
      this.$emit('choose-date', date); // 自定义事件触发传参给予父组件去修改date值
      this.changePanel(false);
      this.getShowDate(date);
    }
  }
}
</script>

<style scoped>
@import "../assets/font.css";

  .date-picker {
    display: inline-block;
  }

 .picker-input {
    position: relative;
  }

  .picker-input .icon-date {
    position: absolute;
    width: 25px;
    height: 100%;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    left: 5px;
  }

  .picker-input input {
    height: 40px;
    line-height: 40px;
    padding: 0 30px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
  }

  .picker-panel {
    position: absolute;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    margin-top: 5px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    width: 322px;
    height: 329px;
  }

  .picker-panel .picker-arrow {
    border: 6px solid transparent;
    border-bottom-color: #dcdfe6;
    width: 0;
    height: 0;
    position: absolute;
    top: -12px;
    left: 30px;
  }

  .picker-panel .picker-arrow::after {
    display: block;
    content: "";
    border: 6px solid transparent;
    border-top-width: 0;
    border-bottom-color: #fff;
    width: 0;
    height: 0;
    position: absolute;
    left: -6px;
    top: 1px;
  }
  .picker-panel .picker-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 10px;
  }
  
  .picker-panel .picker-btn {
    margin-right: 8px;
    margin-left: 8px;
    font-size: 12px;
    color: #303133;
    cursor: pointer;
  }

  .picker-panel .picker-date {
    margin-left: 60px;
    margin-right: 60px;
    font-size: 14px;
    user-select: none;
  }

  .picker-panel .picker-content {
    padding: 0 10px 10px;
    color: #606266;
    user-select: none;
  }
  .picker-panel .picker-weeks {
    display: flex;
    justify-content: space-around;
    height: 40px;
    /* line-height: 40px; */
    align-items: center;
    border-bottom: 1px solid #ebeef5;
  }
  .picker-panel .picker-days {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .picker-panel .picker-days span{
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    margin: 4px 6px;
    cursor: pointer;
  }

  .picker-panel .picker-days span:hover {
    color: #409eff;
  }

  .picker-panel .picker-days span.is-today {
    color: #409eff;
    font-weight: 700;
  }
  
  .picker-panel .picker-days span.is-select {
    border-radius: 50%;
    background-color: #409eff;
    color: #fff;
  }

  .picker-panel .picker-days span.other-month {
    color: #c0c4cc;
  }
</style>