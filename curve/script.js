var initial = "M 10 100 Q 250 100 490 100"

var final = "M 10 100 Q 250 100 490 100"

var string = document.querySelector('#string')

string.addEventListener('mousemove',function(dets){
    path = `M 10 100 Q ${dets.x} ${dets.y} 490 100`
    console.log(dets.x,dets.y)

    gsap.to('svg path',{
        attr:{d:path},
        duration: 0.3,
        ease:'power3.out'
    })
    
})

string.addEventListener('mouseleave',function(dets){
    
    
    gsap.to('svg path',{
        attr:{d:final},
        duration:1.5,
        ease: "elastic.out(1,0.2)"
    })

    
    
})