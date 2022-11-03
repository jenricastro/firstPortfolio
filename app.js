

const nav = () =>{
    $navbar = $('<div>').addClass('navbar').appendTo('body');
        $navDrop = $('<div>').addClass('drop').appendTo('.navbar');
            $subNav = $('<div>').addClass('subnav').appendTo('.drop');
                $navBtn = $('<button>').addClass('subnavbtn').text('Hello World').appendTo('.subnav');
                $navCont= $('<div>').addClass('subnav-content').appendTo('.subnav');
                    $navInfo = $('<div>').addClass('subInfo').appendTo('.subnav-content');
                        $('<a>').attr('href', '#').text('GitHub').appendTo('.subInfo');
                        $('<a>').attr('href', '#').text('LinkedIn').appendTo('.subInfo');
                        $('<a>').attr('href', '#').text('Resume').appendTo('.subInfo');
                        $('<a>').attr('href', '#').text('Contact').appendTo('.subInfo');

    $('.subnavbtn').mouseover('hover',() =>{
        $('.sub-home').css({'display': 'none'}); 
    });
    
    $('.drop').mouseleave('hover',() =>{
    
        $('.drop').css({
            'margin-top': '-50px'
        }); 

        $('.sub-home').css({
            'display': 'none'
    }); 

    }).mouseenter('hover',() =>{
        $('.drop').css({
            'margin-top': '0px'
        }); 
    });
}

const container = () => {
    $container = $('<div>').addClass('container').appendTo('body');

        // //Modal
        // $modalBtn = $('<button>').attr('id', 'openModal').text('Contact Me').appendTo('body');
        //     $modal = $('<div>').addClass('modal').appendTo($modalBtn);
        // 
        //     // Contact Form
        //     $formCont = $('<div>').addClass('form-container').appendTo($modal);
        //     $form = $('<form>').attr({
        //         action: "#",
        //         class: 'form'
        //     }).appendTo($formCont);
        //         //info-Name
        //         $formName = $('<label>').attr('for', 'form-name').text('Your name').appendTo($form);
        //         $formNameInput = $('<input>').attr({
        //             type: "text",
        //             class: 'form-name',
        //             name: "name",
        //             placeholder: 'Your name ...',
        //         }).appendTo($form);
        //         //info-Email
        //         $formEmail = $('<label>').attr('for', 'email').text('email').appendTo($form);
        //         $formEmailInput = $('<input>').attr({
        //             type: 'email',
        //             class: 'email',
        //             name: 'email',
        //             placeholder: 'Add your email ...',
        //         }).appendTo($form);
        //         //info Subject
        //         $formSubject = $('<label>').attr('for', 'form-subject').text('Subject').appendTo($form);
        //         $formSubInput = $('<input>').attr({
        //             type: 'text',
        //             class: 'form-subject',
        //             name: 'subject',
        //             placeholder: 'Whaaaa... ??',
        //         }).appendTo($form);
        //         //RUN API??????????????
        //         $formDes = $('<label>').attr('for', 'form-description').text('Description').appendTo($form);
        //         $formDesInput = $('<input>').attr({
        //             type: 'text',
        //             class: 'form-description',
        //             name: 'description',
        //         }).appendTo($form);
        //     $closeBtn = $('<botton>').addClass('pop-button').text('submit').appendTo($form);



        //My Info
        $info = $('<div>').addClass('info').appendTo($container);
        $infoText = $('<div>').addClass('info-text').appendTo($info);
        
        $('<h2>').text('Hi, my name is  Jaime').appendTo($infoText)
            $('<h4>').text('Junior Web Developer and Software Engineer').appendTo($infoText)
            $('<p>').text('')
        
        //Carousel
        $carousel = $('<div>').addClass('carousel').appendTo($container);
        $('<h3>').text("").appendTo($carousel);
        $carouselCont = $('<div>').addClass('carousel-content').appendTo($carousel);
            
            $btnP = $('<div>').addClass('btnP').appendTo($carouselCont);//The picture continer is cobering half the button..
                $carouselImg = $('<div>').addClass('carouselImg').appendTo($carouselCont)
                    $('<img>').attr('src', '../firstPortfolio/images/yellowbelttest.png').appendTo($carouselImg);
                    $('<img>').attr('src', '../firstPortfolio/images/profilepagecss.png').appendTo($carouselImg);
                    $('<img>').attr('src', '../firstPortfolio/images/Full CRUD.png').appendTo($carouselImg);
                    $('<img>').attr('src', '../firstPortfolio/images/Full CRUD1.png').appendTo($carouselImg);
                    $('<img>').attr('src', '../firstPortfolio/images/Full CRUD2.png').appendTo($carouselImg);
                    $('<img>').attr('src', '../firstPortfolio/images/ApiCRUD.png').appendTo($carouselImg);
            $btnN = $('<div>').addClass('btnN').appendTo($carouselCont);//The picture continer is cobering half the button..

        //User Pic
        $picture = $('<div>').addClass('picture').appendTo('body');
        $('<img>').attr('src', '../firstPortfolio/images/20221101_195131.jpg').appendTo($picture)
}

//

//Carousel w Projects

const projects = () =>{
    let projectsImg = 0
    let numOfprojects = $('.carouselImg').children().length -1;
    //Move pictures fowrd
        $('.btnN').on('click', ()=>{
            $('.carouselImg').children().eq(projectsImg).css('display', 'none');
                if(projectsImg < numOfprojects){
                    projectsImg ++
                }else{
                    projectsImg = 0
                }
            $('.carouselImg').children().eq(projectsImg).css('display', 'block');
        })
    //reverse Pics on loop
        $('.btnP').on('click', () =>{
            $('.carouselImg').children().eq(projectsImg).css('display', 'none');
                if(projectsImg > 0){
                    projectsImg --
                }else{
                projectsImg = numOfprojects
                }
            $('.carouselImg').children().eq(projectsImg).css('display', 'block')    
        })
}

// const modal = () =>{
// 
//     const $openModal = $('#openModal');
//     const $formCont = $('.form-container');
//     const $closeBtn = $('.pop-button');
//         
//     
// 
//     const openModal = () => {
//         $formCont.css('display', 'block');
//     }
//     
// 
//     const closeModal = () =>{
//         $formCont.css('display', 'none')
//     }
// 
//     $openModal.on('click', openModal);
//     $closeBtn.on('click', closeModal)
// }

// HTML/MAP
$(()=>{
    nav()
    container()
    projects()
    // modal()
})