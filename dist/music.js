const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [{
            name: "归来",
            artist: '满江',
            url: '/mp3/归来 - 满江.flac',
            cover: '/img/logo.png',
        },
        {
            name: '风筝误',
            artist: '刘珂矣',
            url: 'http://up.mcyt.net/?down/46644.mp3',
            cover: '/img/logo.png',
        }
    ]
});
ap.autoplay = true;