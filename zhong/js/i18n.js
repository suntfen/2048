var I18N = {
  'numberToString': function (num) {
  return ('' + num).split('')
    .map(function (c) { return num; }).join('');
  },
  'tileText': function (value) {
    var text = ['饼',
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
    '学术造假'];
    var log2 = function (n) {
      var ret = 0;
      while (n > 1) ret++, n >>= 1; return ret;
    }
    return text[log2(value)] || '';
  },
  'won': '胜利！',
  'lose': '失败……',
}
 
