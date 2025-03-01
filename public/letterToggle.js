AFRAME.registerComponent('toggle1',{
    init : function(){
        const L1 = this;
        L1.letter1 = document.querySelector('#letter1')
        $letter.toggle();

        if(showletter1)
            $letter.toggle();
    }
})
