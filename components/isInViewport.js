isInViewport: function (node) {
    var rect = node.getBoundingClientRect();
    var top = rect.top;
    var bottom = rect.bottom;
    var left = rect.left;
    var right = rect.right;
    var innerHeight = window.innerHeight || document.documentElement.clientHeight;
    var innerWidth = window.innerWidth || document.documentElement.clientWidth;

    if (top > innerHeight || bottom < 0 || left > innerWidth || right < 0){
        return false;
    }

    return true;
},