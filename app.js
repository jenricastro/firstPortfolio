

const nav = () =>{

    $nav = $('<div>').addClass('nav').appendTo('body');
        $('<a>').attr('href', '#').text('Homepage').appendTo($nav);
        $('<a>').attr('href', '#').text('GitHub').appendTo($nav);
        $('<a>').attr('href', '#').text('LinkedIn').appendTo($nav);
        $('<a>').attr('href', '#').text('Contact').appendTo($nav);
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
        
        $('<h2>').text('Info').appendTo($infoText)
        
        //Carousel
        $carousel = $('<div>').addClass('carousel').appendTo($container);
        $('<h3>').text("My Projects").appendTo($carousel);
        $carouselCont = $('<div>').addClass('carousel-content').appendTo($carousel);
            
            $btnP = $('<div>').addClass('btnP').appendTo($carouselCont);
                $carouselImg = $('<div>').addClass('carouselImg').appendTo($carouselCont)
                    $('<img>').attr('src', '../firstPortfolio/images/yellowbelttest.png').appendTo($carouselImg);
                    $('<img>').attr('src', '../firstPortfolio/images/profilepagecss.png').appendTo($carouselImg);
                    $('<img>').attr('src', '../firstPortfolio/images/Full CRUD.png').appendTo($carouselImg);
                    $('<img>').attr('src', '../firstPortfolio/images/Full CRUD.png').appendTo($carouselImg);
                    $('<img>').attr('src', '../firstPortfolio/images/Full CRUD1.png').appendTo($carouselImg);
                    $('<img>').attr('src', '../firstPortfolio/images/Full CRUD2.png').appendTo($carouselImg);
                    $('<img>').attr('src', '../firstPortfolio/images/ApiCRUD.png').appendTo($carouselImg);
            $btnN = $('<div>').addClass('btnN').appendTo($carouselCont);

        //User Pic
        $picture = $('<div>').addClass('picture').appendTo($container);
        $('<img>').attr('src', '../firstPortfolio/images/20221101_195131.jpg').appendTo($picture)
}


//Carousel w Projects

const projects = () =>{
    let projectsImg = 0;
    let numOfprojects = $('.carouselImg').children().length -1;
    //Move pictures fowrd
        $('.btnN').on('click', ()=>{
            $('.carouselImg').children().eq(projectsImg).css('display', 'none');
                if(projectsImg < numOfprojects){
                    projectsImg++
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