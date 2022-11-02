

const nav = () =>{

    $nav = $('<div>').addClass('nav').appendTo('body');
        $('<a>').attr('href', '#').text('Homepage').appendTo($nav);
        $('<a>').attr('href', '#').text('GitHub').appendTo($nav);
        $('<a>').attr('href', '#').text('LinkedIn').appendTo($nav);
        $('<a>').attr('href', '#').text('Contact').appendTo($nav);
}

const container = () => {
    $container = $('<div>').addClass('container').appendTo('body');

        //Modal
        $modalBtn = $('<button>').attr('id', 'openModal').text('Contact Me').appendTo('body');
            $modal = $('<div>').addClass('modal').appendTo($modalBtn);
        
            // Contact Form
            $formCont = $('<div>').addClass('form-container').appendTo($modal);
            $form = $('<form>').attr('action', "#").appendTo($formCont);
                //info-Name
                $formName = $('<label>').attr('for', 'form-name').text('Your name').appendTo($form);
                $formNameInput = $('<input>').attr({
                    type: "text",
                    class: 'form-name',
                    name: "name",
                    placeholder: 'Your name ...'
                }).appendTo($form);
                //info-Email
                $formEmail = $('<label>').attr('for')




        //My Info
        $info = $('<div>').addClass('info').appendTo($container);
        $infoText = $('<div>').addClass('info-text').appendTo($info);
        
        $('<h2>').text('Info').appendTo($infoText)
        
        //Carousel
        $carousel = $('<div>').addClass('carousel').appendTo($container);
        $carouselCont = $('<div>').addClass('carousel-content').appendTo($carousel);
            $('<h3>').text("My Projects").appendTo($carouselCont);
            $btnP = $('<div>').addClass('btnP').appendTo($carouselCont);
                $carouselImg = $('<div>').addClass('carouselImg').appendTo($carouselCont)
                    $('<img>').attr('src', '#').appendTo($carouselImg);
                    $('<img>').attr('src', '#').appendTo($carouselImg);
                    $('<img>').attr('src', '#').appendTo($carouselImg);
            $btnN = $('<div>').addClass('btnN').appendTo($carouselCont);

        //User Pic
        $picture = $('<div>').addClass('picture').appendTo($container);
        $('<img>').attr('src', '../firstPortfolio/images/20221101_195131.jpg').appendTo($picture)
}


//Carousel w Projects

const projects = () =>{
    let projectsImg = 0;
    let numOfprojects = $('carouselImg').children().leng -1;
    //Move pictures fowrd
        $('.next').on('click', ()=>{
            $('carouselImg').children().eq(projectsImg).css('display', 'none');
                if(projectsImg < numOfprojects){
                    projectsImg ++
                }else{
                    projectsImg = 0
                }
            $('carouselImg').children().eq(projectsImg).css('display', 'block');
        })
    //reverse Pics on loop
        $('.previus').on('click', () =>{
            $('carouselImg').children().eq(projectsImg).css('display', "none");
                if(projectsImg > 0){
                    projectsImg --
                }else{
                projectsImg = numOfprojects
                }
            $('carouselImg').children().eq(projectsImg).css('display', 'block')    
        })
}



// HTML/MAP
$(()=>{
nav()

container()
projects()

})