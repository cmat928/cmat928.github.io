(function () {
  var clockEl = document.getElementById('live-clock');
  if (!clockEl) return;

  function tick() {
    var now = new Date();
    var parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).formatToParts(now);
    var map = {};
    parts.forEach(function (p) { map[p.type] = p.value; });
    clockEl.textContent = map.hour + ':' + map.minute + ':' + map.second + ' ET';
  }

  tick();
  setInterval(tick, 1000);
})();
