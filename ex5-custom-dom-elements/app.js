var holder = document.getElementById('holder');
var info = document.getElementById('info');

holder.ondragover = function () {
  return false;
};

holder.ondragleave = holder.ondragend = function () {
  return false;
};

holder.ondrop = function (e) {
  e.preventDefault();
  var file = e.dataTransfer.files[0];
  console.log(file);
  info.innerHTML = 'File info <br/>' +
   'path: ' + file.path + '<br/>' +
   'name: ' + file.name + '<br/>' +
   'size: ' + file.size + '<br/>' +
   'type: ' + file.type + '<br/>' +
   'lastModified: ' + new Date(file.lastModified).toDateString() + '<br/>';
  return false;
};

var browserWindowProxy = window.open('https://github.com/');
setTimeout(function() {
  // 2秒後に閉じる
  browserWindowProxy.close();
}, 2000);
