export const drawRect = (detections, ctx) => {
    detections.forEach(prediction=>{
        const [x,y,width,height] = prediction['bbox'];
        const text = prediction['class'];

        // set styling
        // const color = '#' + Math.floor(Math.random()*166544).toString(16);
        const color = 'blue'
        ctx.strokeStyle = color
        ctx.font = '18px Arial'
        ctx.fillstyle = color
        

        // draw rectangles and text
        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, width, height)
        ctx.stroke()

    })

}