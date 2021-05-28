console.log("script.js running");

const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profileImg');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = '<img src="https://images.squarespace-cdn.com/content/v1/5b71dbcb0dbda3b1c8395ac1/1621364724024-PMOMT0227KJOPKHXDH76/ke17ZwdGBToddI8pDm48kKtijf5x5S0rIV7X_qDH3dB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UaZbTVdO5VSPAOxIcVIbmIFLIFeVDbQiz7iBIgNCzklBDD2o6CESiqIlH5ssNFrtmA/210407.jpg?format=1500w" alt="">';
    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    excerpt.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, fugit.';
    profileImg.innerHTML = '<img src="http://randomuser.me/api/portraits/men/45.jpg" alt="">';
    name.innerHTML = 'Jon Doe';
    date.innerHTML = 'October 8, 2020';

    animated_bgs.forEach(bg => bg.classList.remove('.animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('.animated-bg-text'))
}