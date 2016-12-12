var config_2048 = {
  rank    : 4,
  title   : '我爱科研，科研使我快乐',
  author  : '<strong>Yvette</strong> & <strong>heiyuxiaor</strong>',
  intro   : '让我们快乐地来发<strong>SCI</strong>，拿<strong>奖学金</strong>吧',
  data : function (value) {
    var text = [
	'饼',
    '实验',
    '实验报告',
    '组会',
    '国内会议',
    '国际会议',
    '核心',
    'EI',
    'SCI',
    'Nature',
    '人生赢家！',
    '学术造假',
	'身败名裂'];
    var log2 = function (n) {
      var ret = 0;
      while (n > 1) ret++, n >>= 1; return ret;
    }
    return text[log2(value-1)] || '';
  },
  mark : function (value) {
    var text = [
    '可怜的娃',
    '睡在实验室可能就有结果了',
    '快去找老师',
	'差一点就能发论文了',
	'水一水搞不好就能毕业了',
	'运气好可以出去旅游了',
	'达到学校的毕业要求了',
	'学业一等奖学金稳了',
	'国奖在向你招手',
	'奖学金收割机',
	'人生赢家,求抱大腿',
    '知足常乐，一朝回到解放前',
	'重蹈覆辙，道德沦丧'];
    var log2 = function (n) {
      var ret = 0;
      while (n > 1) ret++, n >>= 1; return ret;
    }
    return text[log2(value-1)] || '';
  },
  goal : 2048,
  done : '知足吧，你已经成为人生赢家'
}
