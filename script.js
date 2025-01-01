function checkPin() {
    const pin = document.getElementById('pinInput').value;
    const validPins = {
        '28102002': {
            message: 'Hey Samriddhi Mommy!💫\n\nHappy New Year! Wishing you a year filled with joy, laughter, and amazing adventures.\n\nWell honestly, I never imagined we\'d become friends, but I\'m so incredibly happy that I can end this year with you by my side. You\'re one of the best friends I\'ve made this year, and I cherish every moment we\'ve shared. Especially those hilarious reel-making sessions today! (Remember how long it took us to get those 10 seconds of decent footage? 😂)\n\nAnd yeah I feel so lucky to have you in my life. You bring so much light and positivity. Thank you for being such a wonderful friend, and thank you for handling me and my nonsense activities with such grace.\n\nI wish you all the best in achieving everything you desire in life. You\'re incredibly capable and I know you can accomplish anything you set your mind to.\n\nLet\'s make this year one to remember!\n\nChal chal ab zyda khush matt ho , padhayi kar jake, naukri kar fir har din momos khaunga tere paiso se, huh!!!',
            images: ['img1.jpg', 'img2.jpg', 'img3.jpg']
        },
        '13052004': {
            message: `Happy New Year, Pagal 🎊❣!  

Umm so as we step into 2025, I want to remind you how much you mean to me. Over the past two years, we’ve been through so much. Bad days that felt endless, moments of pure joy, and everything in between. But no matter what life threw at us, we’ve stood by each other, and that’s something truly special. It’s like the universe gave me the thinnest, craziest, most amazing bestie, and I wouldn’t trade you for anyone else👺..

You’ve been my therapist without a degree, my partner-in-crime, and the one who never lets me take myself too seriously. Honestly...who else would laugh at my dumb jokes or roast me better than you?  

And yeah thanks for handling me and listening to my nonsense talks with such grace....huh ... lot's of love to u...! Let’s make 2025 even crazier (and maybe you can try to gain a little weight this year huh...)! Chl chl ab so ja aur mera new year gift bhej dena huh...👺...  😋`,
            images: ['sneha1.jpg', 'sneha2.jpg', 'sneha3.jpg']
        },
        '07072003': {
            message: `Happy New Year Rohit Jiiiiiiii💫  

Well As we step into 2025, I just think back to where it all began—our first year of college. From strangers to the great friends we are today, it’s been an amazing journey filled with countless memories, laughter, and lessons. You've been there through it all, and I couldn’t have asked for a better friend to share these years with...❣

Thank you for always having my back, for the endless talks, and for making even the toughest days bearable with your jokes and support. College wouldn’t have been the same without you, and I’m so grateful for all the moments we’ve shared....🫂

As we move forward, I hope this year brings you all the happiness, success, and opportunities you’ve worked so hard for... Let’s make 2025 even better with more adventures, more laughs, and more milestones to celebrate together. Here’s to us and another year of friendship, brother 🫂❣ 

Chl chl bsdk zyada khush mtt ho ab....bss muu mtt fulaya kr merese .... 🥺 babuuuuuuuuuu madaltod`,
            images: ['rohit1.jpg', 'rohit2.jpg', 'rohit3.jpg']
        },
        '24052004': {
            message: `Happy New Year, Kanduu Don🧸!  

As we welcome 2025, I want to take a moment to reflect on how special you are to me. Over the past year, your thoughtful letters and motivational words have been a constant source of encouragement. No matter how tough things got, you always knew how to lift my spirits and remind me to keep pushing forward. I’m truly lucky to have someone like you in my life who believes in me even when I start to doubt myself. 

You’ve been more than just a friend—you’ve been a guide, a cheerleader, and someone I can always count on. Your positivity and kindness inspire me to be a better person every single day. Whether it’s through your heartfelt words or just your presence, you have this incredible ability to make everything seem brighter.  

Thank you for being the amazing person you are, Harshiee. Here’s to another year of laughter, growth, and countless unforgettable moments. Wishing you all the happiness, success, and love that your heart desires. Let’s make 2025 truly magical ! 🎊❣`,
            images: ['kandu2.jpg', 'kandu1.jpg', 'kandu3.jpg']
        },
        '28052005': {
            message: `Hey broooo!!!!!

Happy New Year! 🎉 Hope you're ready for an awesome year! I know you sometimes get caught up in your head, but try to remember that you're capable of amazing things. Don't let those worries hold you back from chasing your dreams.

And yah thanks for capturing my cool pics... You have such a unique eye for capturing moments, and I always love seeing what you create. Keep that passion alive and let your creativity shine!

You're an amazing friend, always loyal and supportive. I cherish our friendship and I'm so grateful to have you in my life. Now go out there and make this year the best one yet! You've got this ! 💪`,
            images: ['abhi1.jpg', 'abhi2.jpg', 'abhi3.jpg']
        },
        '08072004': {
            message: `Hey Aastha, Happy New Year! 🎉 I hope this year brings you an abundance of joy, success, and unforgettable memories. I know the MBBS journey can be incredibly challenging, but remember to cherish every moment and celebrate your accomplishments, big or small. You're incredibly strong and resilient, and I have no doubt that you'll overcome any obstacle that comes your way.

I'm so proud of you for pursuing your dreams and working so hard towards your goals. Keep that fire burning within you and never give up on your aspirations. You're an inspiration to me, and I admire your dedication and perseverance.

Wishing you a year filled with laughter, love, and the strength to conquer any challenges that come your way. May this year be your most successful yet! Happy New Year, Aastha! 🎊`,
            images: ['dr1.jpg', 'dr2.jpg', 'dr3.jpg']
        }
    };

    if (validPins[pin]) {
        const { message, images } = validPins[pin];
        localStorage.setItem('newYearMessage', message);
        localStorage.setItem('messageImages', JSON.stringify(images));
        window.location.href = 'message.html';
    } else {
        alert('Invalid PIN. Please try again.');
    }
}

window.onload = function() {
    const message = localStorage.getItem('newYearMessage');
    const images = JSON.parse(localStorage.getItem('messageImages')) || [];
    const personalMessageElement = document.getElementById('personalMessage');
    const imageContainer = document.getElementById('imageContainer');

    if (personalMessageElement) {
        personalMessageElement.innerText = message || 'No message found.';
    }

    if (imageContainer) {
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'New Year';
            imageContainer.appendChild(img);
        });
    }
};
