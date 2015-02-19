
(function () {
    var config = {
        showing:    true
    ,   step:       18 // we only accept pixels
    ,   colour:     "deepskyblue"
    };
    
    
    // create an overlay
    var overlay = document.createElement("div")
    ,   st = overlay.style
    ;
    overlay.className = "rizm";
    st.background = "repeating-linear-gradient(transparent, transparent " + (config.step - 1) + "px, " + config.colour + " " + config.step + "px)";
    st.height = document.body.clientHeight + "px";
    st.width = document.body.clientWidth + "px";
    st.position = "absolute";
    st.top = 0;
    document.body.appendChild(overlay);

    // XXX
    // create a dialog in the bottom right corner with settings
    // load/save to localStorage
}());



