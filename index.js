function Button(text){
    this.text = text;
}

Button.prototype = {
    create: function(){
        var self = this;
        this.$element = $('<button>');
        this.$element.text(this.text);
        this.$element.click(function(){
            alert(self.text);
        });
        $('body').append(this.$element);
    }
}

var button1 = new Button('Hello!');

button1.create();