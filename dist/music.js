const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [{
            name: "归来",
            artist: '满江',
            url: 'http://lartry.github.io/归来 - 满江.flac',
            cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg',
        },
        {
            name: '风筝误',
            artist: '刘珂矣',
            url: 'http://up.mcyt.net/?down/46644.mp3',
            cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
        }
    ]
});
ap.autoplay = true;