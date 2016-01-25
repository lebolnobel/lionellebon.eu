<!DOCTYPE html>
<html lang="fr-FR">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello! &ndash; Do you want to work with me? &ndash; Lionel Lebon</title>

    <link rel="stylesheet" type="text/css" href="./assets/css/all.min.css" />
    <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>

    <style>
    body {
        font: 16px "PT Sans", "Open Sans",Helvetica,Arial,sans-serif;
        color: #666;
    }

    p {
        text-align: justify;
    }

    h2, h3, h4, h5, h6 {
        color: #000;
        text-align: center;
        margin: 5rem 0 2rem 0;
    }

    a, a:visited {
        position: relative;
        text-decoration: none;
        color: #0e0e0e;
    } /*color: darken($color-link, 10%);*/

    a:after {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 1px;
      content: '';
      background: #666;
      opacity: 0;
      -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
              transition: opacity 0.3s, transform 0.3s;
      -webkit-transform: translateY(5px);
          -ms-transform: translateY(5px);
              transform: translateY(5px);
    }

    a:hover:after,
    a:focus:after {
      opacity: 1;
      -webkit-transform: translateY(0px);
          -ms-transform: translateY(0px);
              transform: translateY(0px);
    }

a.social {
    display: inline-block;
    position: relative;

    border: 1px solid #333;
    border-radius: 35px 35px 35px 35px;
    background: none repeat scroll 0 0 #666;
    transition: background 0.6s ease 0s;

    width: 24px;
    height: 24px;
    margin: 0 3px;
    padding: 6px 3px 0 3px;
}

a.social:hover, a.social:focus {
    background: none repeat scroll 0 0 #0e0e0e;
    outline: medium none;
}

a.social:after {
    background: transparent;
}

.social-network [data-tip]:hover:after {
    top: 32px;
    background: transparent;
}

.social-network [data-tip]:hover:before {
    top: 28px;
}

[class^="icon-"], [class*=" icon-"] {
    display: inline-block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    vertical-align: text-top;
    background-image: url("assets/img/sprite.png");
    background-position: 0px 0px;
    background-repeat: no-repeat;
}

/* Hack avec margin pour le positionnement. */
.icon-ico-linkedin { background-position: 0px -52px; }
.icon-ico-skype { background-position: 0px -68px; margin-top: 1px; }
.icon-ico-twitter { background-position: 0px -84px; margin-top: 1px; }
.icon-ico-flickr { background-position: -16px -100px; margin-top: 1px; }
.icon-ico-github { background-position: 0px -100px; margin-top: 1px; }
.icon-ico-mail { background-position: 0px -116px; margin-top: 2px; }
.icon-ico-gpg { background-position: 0px -132px; }

[data-tip] {
    position: relative;
    line-height: 11px;
    padding: 0px;
    margin: 0px;
}

[data-tip]:hover:after {
    content: attr(data-tip);
    position: absolute;
    top: 22px;
    left: -2px;
    min-width: 200px;
    min-height: 22px;

    white-space: nowrap;
    padding: 5px 10px;
    background: #000;
    color: #ddd;
    font-size: 1em;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 1;
    -webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

[data-tip]:hover:before {
    content: "▲";
    position: absolute;
    top: 19px;
    left: 1px;
    font-size: 2em;
    color: #000;
}

.social-network [data-tip]:hover:after {
    top: 32px;
}

.social-network [data-tip]:hover:before {
    top: 28px;
}
    </style>
</head>
<body>

<header style="border-bottom: 1px solid rgba(204, 204, 204, 0.5);
position: relative;
height: 35rem;
width: 100%;
background: transparent url('./assets/img/bg-simple.jpg') no-repeat fixed 50% 100% / cover;">
        <div class="cover" style="opacity: 0.05"></div>
        <div style="width: 75rem; padding-top: 2rem; margin: auto;">
            <h1 style="text-align: center;color: #fff; position: inherit;
font-family: 'Lato', 'Centhury Gothic'; text-shadow: 2px 2px #333; font-size: 3em; margin-top: 10rem;">
                    <span style="color:#eee; font-style: normal;">Hi, I'm</span> Lionel Lebon <em style ="font-weight: 100; color: #aaa">aka <span style="color:#eee; font-style: normal;">Hennek</span></em>
                    <hr style="margin: auto; padding: 0; border: none; border-bottom:1px solid rgba(204, 204, 204, 0.5);" />
                    <span style="display: block;text-align: center; color: #ddd; font-size: 30px;">Currently available!</span>
            </h1>

            <img alt="Lionel Lebon pic" src="http://lorempicsum.com/futurama/200/200/6" style="position: absolute;
left: 50%;
top: 29rem;
margin: 0px 0px 0px -8rem;
display: block;
width: 16rem;
height: 16rem;
border: 0.5rem solid #fff;
border-radius: 50%;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);">
        </div>
    </header>

    <div id="header-wrapper" class="fixed-header-wrapper">
        <div class="fixed-header" style="
height: 3em;
margin: auto;
padding: 0px 0px;
border-bottom: 1px solid rgba(204, 204, 204, 0.5);
line-height: 3;
color: #333;
background-color: #FFF;">

            <nav id="main-links" class="main-links" style="display: block; width: 75rem; margin:auto; padding: auto;">
                <div style="float: right;">
                    <a href="#header-wrapper" style="margin-left: 2em;">About</a>
                    <a href="#projects" style="margin-left: 2em;">Projets</a>
                    <a href="#contact" style="margin-left: 2em;">Me contacter</a>
                </div>
                <a href="#header-wrapper" style="margin-right: 2em;">About</a>
                <a href="#projects" style="margin-right: 2em;">Projets</a>
                <a href="#contact" style="margin-right: 2em;">Me contacter</a>
            </nav>
        </div>
    </div>

    <section style="width: 75rem; margin: 10rem auto 10px;">
        <p>I ❤ to hack, net neutrality and I do things with code. In my spare time, I think about new ways to use technology to improve the human condition / GPG F1DF1590.</p>


        <!--<p>About the author<br />
        I'm Lionel Lebon. I'm a computer scientist and I'm passionate about the digital and web stuff. I love to hack and I do <a href="" title="">things with code</a>. In my spare time, I think about new ways to use technology to improve the human condition. You can follow me on Twitter <a href="https://twitter.com/hennek_" title="">@Hennek_</a>.</p>-->


        <h2>And now? /</h2>

        <div style="margin: 2rem 0 7rem;">
            <p style="text-align: center;">
                Would you send me a message?<br />
                <a href="" title="">me@lionellebon.eu</a> <span style="font-size: 0.8em">(<a href="" title="">clé PGP</a>)</span>
            </p>
            <p style="text-align: center;font-size: 0.8em">You can ping me on <a href="" title="">Twitter</a> or <a href="" title="">LinkedIn</a>.</p>
        </div>

        <div style="float: right; width: 50%; text-align: center;">
            Available for employment from<br />
            <strong>Septembre, 2016</strong>
        </div>

        <div style="width: 50%;">
            <div style="text-align: center">
                <p style="margin: 0 0 1rem; text-align: center;">You can reach me via these links</p>

                <a href="https://twitter.com/Hennek_" data-tip="Suivez-moi sur Twitter" class="social"><span class="icon-ico-twitter"></span></a>
                <a href="https://github.com/Hennek" data-tip="Trouvez-moi sur Github" class="social"><span class="icon-ico-github"></span></a>
                <a href="https://www.linkedin.com/profile/view?id=102433350" data-tip="Rencontrons-nous sur LinkedIn" class="social"><span class="icon-ico-linkedin"></span></a>
                <a href="https://secure.flickr.com/photos/hennek_/" data-tip="Mes photos sur Flickr" class="social"><span class="icon-ico-flickr"></span></a>
                <a href="skype:lio_hennek" data-tip="Contactez-moi sur Skype" class="social"><span class="icon-ico-skype"></span></a>
                <a href="skype:lio_hennek" data-tip="Contactez-moi sur Skype" class="social"><span class="icon-ico-skype"></span></a>
            </div>
        </div>
    </section>

    <footer style="margin: 5rem auto 0; padding: 5rem 0; text-align: center; font-size: 0.7em;">
        CopyLeft (Beerware) 2016 &ndash; Lionel Lebon (<a href="" title="" data-tip="Contactez-moi sur Skype">@hennek_</a>)<br />
        Built from scratch using open-source librairies
        <div style="margin: 0.5rem;">
            <span style="background: rgba(0, 0, 0, 0.08) none repeat scroll 0% 0%;
                padding: 2px 4px;
                border-radius: 3px;">❤ Made with love</span>
        </div>
    </footer>
</body>
</html>
