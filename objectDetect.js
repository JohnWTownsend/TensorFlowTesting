window.onload = function() {
    var img = document.getElementById('img');

    var tracker = new tracking.ObjectTracker(['face']);
    tracker.setStepSize(1.7);

    setInterval(()=>{tracking.track('#img', tracker);},500);

    tracker.on('track', function(event) {
      event.data.forEach(function(rect) {
        window.plot(rect.x, rect.y, rect.width, rect.height);
      });
    });

    window.plot = function(x, y, w, h) {
      var rect = document.createElement('div');
      document.querySelector('.demo-container').appendChild(rect);
      rect.classList.add('rect');
      rect.style.width = w + 'px';
      rect.style.height = h + 'px';
      rect.style.left = (img.offsetLeft + x) + 'px';
      rect.style.top = (img.offsetTop + y) + 'px';
    };
  };