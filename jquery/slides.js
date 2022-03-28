$(function (){
    $('.mosaico .container .mosaico-wrapper').slick({
        centerMode: false,
        slidesToShow: 6,
        arrows: false,
        responsive:[

        {
            breakpoint: 768,
            settings:{
                arrows: false,
                centerMode: true,
                slidesToShow: 3
            }
        },

        {
            breakpoint: 580,
            settings:{
                arrows: false,
                centerMode: true,
                slidesToShow: 2
            }
        },

        {
            breakpoint: 380,
            settings:{
                arrows: false,
                centerMode: true,
                slidesToShow: 1
            }
        }

        ]
    });

    $('.skills .container').slick({
        centerMode: false,
        slidesToShow: 3,
        arrows: false,
        infinite: false,
        responsive:[

            {
                breakpoint: 768,
                settings:{
                    arrows: false,
                    dots: true,
                    infinte: false,
                    centerMode: false,
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 480,
                settings:{
                    arrows: false,
                    dots: true,
                    infinte: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            }

        ]
    });
})