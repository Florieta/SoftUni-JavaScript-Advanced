function rectangle(width, height, color) {
return{ 
    width,
    height,
    color: color[0].toUpperCase() + color.slice(1, color.length),
    calcArea: function(){
        return width * height;
    }

}
}