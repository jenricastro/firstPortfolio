

const nav = () =>{
    $navbar = $('<div>').addClass('navbar').appendTo('body');
        $navDrop = $('<div>').addClass('drop').appendTo('.navbar');
            $subNav = $('<div>').addClass('subnav').appendTo('.drop');
                $navBtn = $('<button>').addClass('subnavbtn').text('Hello World').appendTo('.subnav');
                $navCont= $('<div>').addClass('subnav-content').appendTo('.subnav');
                    $navInfo = $('<div>').addClass('subInfo').appendTo('.subnav-content');
                        $('<a>').attr('href', 'https://github.com/jenricastro').text('GitHub').appendTo('.subInfo');
                        $('<a>').attr('href', 'https://www.linkedin.com/in/jenricastro?original_referer=https%3A%2F%2Fwww.google.com%2F').text('LinkedIn').appendTo('.subInfo');
                        $('<a>').attr({
                            href: '#',
                            id: 'resumeModal'}).text('Resume').appendTo('.subInfo');
                        $('<a>').attr({
                            href: '#',
                            id: 'openModal'}).text('Contact').appendTo('.subInfo');

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

        //Modal (contact form)
        $modal = $('<div>').addClass('modal').appendTo('body');
        // Contact Form
            $formCont = $('<div>').addClass('form-container').appendTo('.modal');
        //info-Name
                $form = $('<form>').attr({
                            action: "#",
                            class: 'form'
                        }).appendTo('.form-container');
                $formName = $('<label>').attr('for', 'form-name').text('Your name').appendTo('.form');
                $formNameInput = $('<input>').attr({
                    type: "text",
                    class: 'form-name',
                    name: "name",
                    placeholder: 'Your name ...',
                }).appendTo('.form');
                //info-Email
                $formEmail = $('<label>').attr('for', 'email').text('Email').appendTo('.form');
                $formEmailInput = $('<input>').attr({
                    type: 'email',
                    class: 'email',
                    name: 'email',
                    placeholder: 'Add your email ...',
                }).appendTo('.form');
                //info Subject
                $formSubject = $('<label>').attr('for', 'form-subject').text('Subject').appendTo('.form');
                $formSubInput = $('<input>').attr({
                    type: 'text',
                    class: 'form-subject',
                    name: 'subject',
                    placeholder: 'Whaaaa... ??',
                }).appendTo('.form');
                $formDes = $('<label>').attr('for', 'form-description').text('Description').appendTo('.form');
                $formDesInput = $('<input>').attr({
                    type: 'text',
                    class: 'form-description',
                    name: 'description',
                }).appendTo('.form');
        $closeBtn = $('<botton>').addClass('pop-button').text('submit').appendTo('.form');


        //Modal (Resume)
            $('<div>').addClass('modalResume').appendTo('body');
                $('<div>').addClass('resume').appendTo('.modalResume');
                    $('<img>').attr('src', './images/Jaime_Castro_Resume-1.png').appendTo('.resume');
                    $('<img>').attr('src', './images/Jaime_Castro_Resume-2.png').appendTo('.resume');
                    $('<button>').addClass('closeRes').text('X').appendTo('.modalResume');

                

        //My Info
        $info = $('<div>').addClass('info').appendTo($container);
        $infoText = $('<div>').addClass('info-text').appendTo($info);
        
        $('<h2>').text('Hi, my name is  Jaime').appendTo($infoText)
            $('<h4>').text('Junior Web Developer and Software Engineer').appendTo($infoText)
            $('<h6>').text('Knowledge is the basis of something... and I will find that something').appendTo($infoText)
        
        //Carousel
        $carousel = $('<div>').addClass('carousel').appendTo($container);
        $('<a>').attr({
            class: 'projBtn',
            type: 'button',
            href: '../../firstPortfolio/projects.html'
        }).text("My Projects").appendTo($carousel);
        $carouselCont = $('<div>').addClass('carousel-content').appendTo($carousel);
            
            $btnP = $('<div>').text(' ← ').addClass('btnP').appendTo($carouselCont);//The picture continer is cobering half the button..
                $carouselImg = $('<div>').addClass('carouselImg').appendTo($carouselCont);
                    $('<img>').attr('src', './images/yellowbelttest.png').appendTo('.carouselImg');
                    $('<img>').attr('src', './images/profilepagecss.png').appendTo('.carouselImg');
                    $('<img>').attr('src', './images/Full CRUD.png').appendTo('.carouselImg');
                    $('<img>').attr('src', './images/Full CRUD1.png').appendTo('.carouselImg');
                    $('<img>').attr('src', './images/Full CRUD2.png').appendTo('.carouselImg');
                    $('<img>').attr('src', './images/ApiCRUD.png').appendTo('.carouselImg');
            $btnN = $('<div>').text(' → ').addClass('btnN').appendTo($carouselCont);//The picture continer is cobering half the button..

        //User Pic
        $picture = $('<div>').addClass('picture').appendTo('body');
        $('<img>').attr('src', './images/20221101_195131.jpg').appendTo($picture)
        
        //Media Header
        $mediaContainer = $('<div>').addClass('media').appendTo('body');
            $topContainer = $('<div>').addClass('topContainer').appendTo('.media');
            $('<img>').attr({
                src: './images/20221101_195131.jpg',
                class: 'mediaImg'    
            }).appendTo('.topContainer');
                $('<div>').addClass('mediaHeader').appendTo('.topContainer');
                    $('<h1>').addClass('mediaH1').text('Jaime Castro').appendTo('.mediaHeader');
                    $('<h3>').addClass('mediaH3').text('Junior Web Developer & Software Engineer').appendTo('.mediaHeader');
                    
        // //Media Body
            $accordionContainer = $('<div>').addClass('accordion').appendTo('body');
                //Section 1
                $('<h1>').attr('id', 'section1').text('About Me').appendTo('.accordion');
                $('<div>').attr({
                    id: 'accordioncontent_1',
                    class: 'accordion-content',
                }).text('Learn and discover. Seeking an opportunity to exceed and develop my skills within a challenging organization.').appendTo('.accordion');
                //Section 2
                $('<h1>').attr('id', 'section2').text('Education').appendTo('.accordion');
                $('<div>').attr({
                    id: 'accordioncontent_2',
                    class: 'accordion-content'
                }).text('GENERAL ASSEMBLY - Software Engineering').appendTo('.accordion');
                //Section 3
                $('<h1>').attr('id', 'section3').text('Goals').appendTo('.accordion');
                $('<div>').attr({
                    id: 'accordioncontent_3',
                    class: 'accordion-content'
                }).text(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ').appendTo('.accordion'); 
                //Section 4
                $('<h1>').attr('id', 'section4').text('Projects').appendTo('.accordion');
                $('<div>').attr({
                    id: 'accordioncontent_4',
                    class: 'accordion-content'
                }).text('Project will go here, not added because I want to use JQuery and not use the HTML section').appendTo('.accordion');
        //Footer
            $footer = $('<footer>').addClass('footer').appendTo('body');
            $('<a>').attr({
                href: 'https://github.com/jenricastro',
                class: 'fa fa-github'
            }).appendTo('.footer')
            $('<a>').attr({
                href: 'https://www.linkedin.com/in/jenricastro?original_referer=https%3A%2F%2Fwww.google.com%2F',
                class: 'fa fa-linkedin-square',
            }).appendTo('.footer')
            $('<a>').attr({
                href: '#',
                class: 'fa fa-file-text'
            }).appendTo('.footer')
}   

//MODALS

const modal = () =>{

    const $openModal = $('#openModal');
    const $modal = $('.modal');
    const $closeModal = $('.pop-button');

    const openModal = () => {
        $modal.css('display', 'block');
    }

    const closeModal = () => {
        $modal.css('display', 'none');
    }

    $openModal.on('click', openModal);

    $closeModal.on('click', closeModal);
}

const ResumeModal =()=>{

const $openModal = $('#resumeModal');
    const $modal = $('.modalResume');
    const $closeModal = $('.closeRes');

    const openModal = () => {
        $modal.css('display', 'block');
    }

    const closeModal = () => {
        $modal.css('display', 'none');
    }

    $openModal.on('click', openModal);

    $closeModal.on('click', closeModal);


}

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

//Media Body

const media = () =>{
    $accordionContainer.ready(function(){
        $(".accordion h1").on('click',function(){
            let id = this.id;   /* getting heading id */
        
            /* looping through all elements which have class .accordion-content */
            $(".accordion-content").each(function(){
        
                if($("#"+id).next()[0].id != this.id){
                    $(this).slideUp();
                }
            });
        
            $(this).next().toggle();  /* Selecting div after h1 */
        });
        });

}


// DOM-- HTML
$(()=>{
    nav();
    container();
    projects();
    modal();
    ResumeModal();
    media()
})
