<?php
$lang_pl = [
    'lang' => 'pl',
    'page_heading' => 'Wiktor Mazur - portfolio web developera',

    'nav_heading' => 'Główna nawigacja',
    'nav_open_menu' => 'Otwórz menu',
    'nav_close_menu' => 'Zamknij menu',

    'change_lang_url' => 'http://en.wiktormazur.pl/',
    'change_lang_dest_lang' => 'en',
    'change_lang_description' => 'Switch to English',
    'change_lang_label' => 'EN',

    'main_content_hash' => 'tresc',
    'main_content_heading' => 'Główna treść',

    'about_hash' => 'o-mnie',
    'about_menu_label' => 'O mnie',
    'about_heading' => 'Kim jestem?',
    'about_content' => '
<p>Od najmłodszych lat pasjonuję się <strong>programowaniem</strong> oraz <strong>designem</strong>, co w końcu przesądziło o powstaniu mojego własnego kąta w sieci.</p>
<p>Komercyjnie zajmuję się wdrażaniem <strong>witryn i aplikacji internetowych</strong> od niespełna <strong>pięciu lat</strong> - zawsze z pełnym <strong>zaangażowaniem</strong> i okiem wyczulonym na <strong>detale</strong>. Staram się tworzyć takie miejsca w <strong>internecie</strong>, w których pod jednym adresem można znaleźć <strong>estetyczny, intuicyjny interfejs</strong> oraz <strong>niezawodną funkcjonalność</strong>.</p>
<p>Częścią z rzeczy, które udało mi się przez ten czas <strong>„zakodzić”</strong>, postanowiłem pochwalić się <a class=\'scrollLink\' href=\'#portfolio\' aria-label=\'Przejdź do listy projektów\'>niżej</a>.</p>
<p>Aktualnie, jako absolwent szkoły średniej, całą swoją uwagę koncentruję na tworzeniu projektów, które pozwolą mi się <strong>rozwijać</strong> i stawać się coraz lepszym w tym co robię.</p>
<p>Obecnie, choć od niedawna, mieszkam w pełnym inspiracji, uroczym <strong>Wrocławiu</strong>, który - jak sądze - okaże się idealnym miejscem do nawiązywania <strong>współpracy</strong> stacjonarnej, bądź zdalnej.</p>',

    'offert_hash' => 'oferta',
    'offert_menu_label' => 'Oferta',
    'offert_heading' => 'Oferta',
    'offert_content' => [
        [
            'heading' => 'Webdesign',
            'content' => 'Podejmuję się projektów o dowolnym stopniu skomplikowania, by w efekcie uzyskać stronę internetową na miarę <em>2017-stego roku</em>. Uwielbiam design prosty, <strong>minimalistyczny</strong> - taki, który nie zagłusza treści, a jedynie ją podkreśla.'
        ],
        [
            'heading' => 'JavaScript',
            'content' => 'Tworzę aplikacje w oparciu o technologię <strong>JavaScript</strong>. Dbam o takie aspekty jak <em>łatwe zarządzanie</em> i <em>skalowalność</em>, a także przestrzeganie uznanych w branży <em>dobrych praktyk</em>.'
        ],
        [
            'heading' => 'CMS',
            'content' => 'Z moimi umiejętnościami wiąże się również tworzenie szablonów "szytych na miarę" dla <a href=\'https://pl.wikipedia.org/wiki/System_zarz%C4%85dzania_tre%C5%9Bci%C4%85\' aria-label=\'Czym jest system zarządzania treścią\'>systemu zarządzania treścią</a> <a href=\'https://pl.wordpress.org/\'><strong>„Wordpress”</strong></a>, tak aby stanowiły one <em>unikalną wizytówkę</em> w internecie oraz były niezwykle <em>łatwe w edycji</em>.'
        ],
        [
            'heading' => 'Szablony HTML/CSS',
            'content' => 'Wizja szablonu „w głowie”, szkic na kartce papieru, czy w gotowy projekt graficzny – niezależnie od formy pomysłu - z dbałością o detale przekształcę go w wysokiej jakości kod. Zawsze dbam o <a href=\'https://pl.wikipedia.org/wiki/Dost%C4%99pno%C5%9B%C4%87_(projektowanie)\' aria-label=\'Czym jest dostępność\'>dostępność</a> oraz <a href=\'https://pl.wikipedia.org/wiki/User_experience\' aria-label=\'Czym jest user experience.\'>pozytywne doświadczenie użytkowników docelowych</a>.'
        ],
        [
            'heading' => 'Copywriting',
            'content' => 'Wraz z <em>copywriterem</em>, przygotujemy zestawy tekstów na strony internetowe, broszury, ulotki oraz inne materiały reklamowe.'
        ],
        [
            'heading' => 'Identyfikacja wizualna',
            'content' => 'We współpracy z <em>profesjonalnym grafikiem</em>, przygotujemy dla Państwa nowoczesny projekt logotypu, wizytówek, ulotek, szyldów, gadżetów firmowych, słowem: <strong>dowolną grafikę</strong> reklamową!'
        ]
    ],

    'portfolio_hash' => 'portfolio',
    'portfolio_menu_label' => 'Portfolio',
    'portfolio_heading' => 'Wybrane projekty',
    'portfolio_visit' => 'Odwiedź',
    'portfolio_content' => [
        [
            'heading' => 'Krauza Miodu',
            'subheading' => 'Wizytówka',
            'url' => 'http://www.krauzamiodu.pl/',
            'url_label' => 'Odnośnik do strony "Krauza Miodu"',
            'image' => '${require(`./img/projects/krauzamiodu.jpg`)}',
            'description' => 'Wizytówka dwójki pasjonatów-pszczelarzy, prowadzących swoje pasieki na Śląsku, w okolicach Pszczyny.'
        ],
        [
            'heading' => 'C-Thru',
            'subheading' => 'Mini-gra',
            'url' => 'http://c-style.pl/konkurs/',
            'url_label' => 'Odnośnik do aplikacji konkursowej C-Thru.',
            'image' => '${require(`./img/projects/cthru.jpg`)}',
            'description' => 'Aplikacja konkursowa, pozwalająca skomponować własną kreację modową, stworzona dla firmy C-Thru. Projekt zawiera również część back-endową, pozwalającą przeglądać nadesłane prace.'
        ],
        [
            'heading' => 'Calacosta',
            'subheading' => 'Wizytówka / katalog',
            'url' => 'http://www.calacosta.com/',
            'url_label' => 'Odnośnik do strony "Calacosta"',
            'image' => '${require(`./img/projects/calacosta.jpg`)}',
            'description' => 'Firma oferująca nieruchomości w Hiszpanii, z rynku pierwotnego i wtórnego. Sprzedaż mieszkań, apartamentów, domów, działek.'
        ],
        [
            'heading' => 'Kobielanka',
            'subheading' => 'Wizytówka',
            'url' => 'http://www.kobielanka.pl/',
            'url_label' => 'Odnośnik do strony "Kobielanka"',
            'image' => '${require(`./img/projects/kobielanka.jpg`)}',
            'description' => 'Strona typu SPA. Kobielanka to lokalna firma handlowo-usługowa, oferująca usługi budowlane, ślusarsko-spawalnicze oraz sprzedaż materiałów budowlanych.'
        ],
        [
            'heading' => 'Fitmadmara',
            'subheading' => 'Blog',
            'url' => 'http://www.fitmadmara.pl/',
            'url_label' => 'Odnośnik do strony "Fitmadmara"',
            'image' => '${require(`./img/projects/fitmadmara.jpg`)}',
            'description' => 'Wordpressowy szablon bloga, prowadzonego przez studentki Uniwersytetu Śląskiego, które ćwiczą swój warsztat dziennikarski za pośrednictwem blogosfery.'
        ]
    ],

    'cv_url' => 'http://www.wiktormazur.pl/CV_PL.pdf',
    'cv_menu_label' => 'CV',

    'contact_hash' => 'kontakt',
    'contact_menu_label' => 'Kontakt',
    'contact_heading' => 'Chcesz ze mną pracować?',
    'contact_subheading' => 'Skontaktuj się ze mną, jeśli chcesz zamówić u mnie szczegółową wycenę usługi, zatrudnić mnie w swojej firmie lub podjąć inną formę współpracy!',
    'contact_email_label' => 'E-mail',
    'contact_email' => 'me@wiktormazur.pl',
    'contact_phone_label' => 'Numer telefonu',
    'contact_phone' => '510 487 841',
    'contact_facebook_label' => 'Facebook',
    'contact_facebook' => 'fb.com/mazur.wiktor',
    'contact_facebook_url' => 'https://www.facebook.com/mazur.wiktor',

    'GA_ID' => 'UA-107624894-1'
];

$lang_en = [
    'lang' => 'en',
    'page_heading' => 'Wiktor Mazur - web developer\'s portfolio',

    'nav_heading' => 'Main navigation',
    'nav_open_menu' => 'Open menu',
    'nav_close_menu' => 'Close menu',

    'change_lang_url' => 'http://wiktormazur.pl/',
    'change_lang_dest_lang' => 'pl',
    'change_lang_description' => 'Zmień na Polski',
    'change_lang_label' => 'PL',

    'main_content_hash' => 'content',
    'main_content_heading' => 'Main content',

    'about_hash' => 'about-me',
    'about_menu_label' => 'About me',
    'about_heading' => 'Who am I?',
    'about_content' => '
<p>I have been passionate about <strong>programming</strong> and <strong>web design</strong> from the earliest years, what eventually let to the creation of this website.</p>
<p>Commercially, I’ve been implementing <strong>web applications</strong> for about <strong>5 years</strong> – always with great <strong>commitment</strong> and taking care of the <strong>details</strong>. I try to create such places in the <strong>Internet</strong> where you can find both <strong>clean, intuitive interface</strong> and <strong>flawless functionality</strong>.</p>
<p>You can see my work <a class=\'scrollLink\' href=\'#portfolio\' aria-label=\'Go to my projects\'>below</a> or on my <a href=\'https://github.com/wiktor-mazur\' aria-label=\'Visit my Github\'>Github</a>.</p>
<p>Recently I have moved to lovely, full of inspirations <strong>Wrocław</strong>, which – I believe – will bring many professional <strong>cooperation</strong> opportunities. I concentrate on projects which allow me to <strong>develop my skills</strong> and become better in what I love.</p>',

    'offert_hash' => 'offert',
    'offert_menu_label' => 'Offert',
    'offert_heading' => 'Offert',
    'offert_content' => [
        [
            'heading' => 'Webdesign',
            'content' => 'I take up all kinds of projects, no matter how complicated they may seem, in order to create websites that live up to <strong>modern web’s</strong> expectations. I love <strong>minimalistic design</strong>, one that emphasizes content instead of overwhelming it.'
        ],
        [
            'heading' => 'JavaScript',
            'content' => 'I create web applications based on <strong>JavaScript</strong>. I care about such things as app scalability and try to follow <strong>best coding practices</strong>.'
        ],
        [
            'heading' => 'CMS',
            'content' => 'I make <strong>custom templates</strong> for <a href=\'https://en.wikipedia.org/wiki/Content_management_system\' aria-label=\'What is CMS?\'>content management system</a> <a href=\'https://en.wikipedia.org/wiki/WordPress\' aria-label=\'What is Wordpress?\'>"Wordpress"</a>, so that they are <strong>facile to maintain</strong> and become an <strong>unique</strong> place in the Internet.'
        ],
        [
            'heading' => 'HTML/CSS templates',
            'content' => 'No matter if a concept exists in your imagination, it has been drawn or it is a finished graphical project – I will transform it into <strong>high-quality code</strong>. I also take deep care of <a href=\'https://en.wikipedia.org/wiki/Accessibility\' aria-label=\'Read more about accessibility\'><strong>accessibility</strong></a> and so-called <a href=\'\' aria-label=\'Read more about user experience.\'><strong>user experience</strong></a>.'
        ],
        [
            'heading' => 'Copywriting',
            'content' => 'Along with a <strong>copywriter</strong>, we will prepare any texts for websites, booklets, leaflets and other commercial materials.'
        ],
        [
            'heading' => 'Graphic design',
            'content' => 'Thanks to the cooperation with a profesional graphic designer, I can provide modern logotype, business card, leaflet, signboard, gadgets or any commercial design.
'
        ]
    ],

    'portfolio_hash' => 'portfolio',
    'portfolio_menu_label' => 'Portfolio',
    'portfolio_heading' => 'Some of my work',
    'portfolio_visit' => 'Visit',
    'portfolio_content' => [
        [
            'heading' => 'Krauza Miodu',
            'subheading' => 'Informational',
            'url' => 'http://www.krauzamiodu.pl/',
            'url_label' => 'Link to "Krauza Miodu"',
            'image' => '${require(`./img/projects/krauzamiodu.jpg`)}',
            'description' => 'Website made for two passionate beekeepers, who run their apiaries near Pszczyna, Poland.'
        ],
        [
            'heading' => 'C-Thru',
            'subheading' => 'Mini-game',
            'url' => 'http://c-style.pl/konkurs/',
            'url_label' => 'Link to C-Thru\'s contest application.',
            'image' => '${require(`./img/projects/cthru.jpg`)}',
            'description' => 'Contest application made for C-Thru. It allows you to compose your own fashion creation. The project also includes a back-end section to view the submitted creation.'
        ],
        [
            'heading' => 'Calacosta',
            'subheading' => 'Real estate',
            'url' => 'http://www.calacosta.com/',
            'url_label' => 'Link to "Calacosta"',
            'image' => '${require(`./img/projects/calacosta.jpg`)}',
            'description' => 'A home estate company offering properties in Spain. They sell apartments, houses, lands.'
        ],
        [
            'heading' => 'Kobielanka',
            'subheading' => 'Informational',
            'url' => 'http://www.kobielanka.pl/',
            'url_label' => 'Link to "Kobielanka"',
            'image' => '${require(`./img/projects/kobielanka.jpg`)}',
            'description' => 'Simple single-page application. Kobielanka is a local commercial and service company, which offers structural services, etal-working and welding workshop as well as sales of building materials.'
        ],
        [
            'heading' => 'Fitmadmara',
            'subheading' => 'Blog',
            'url' => 'http://www.fitmadmara.pl/',
            'url_label' => 'Link to "Fitmadmara"',
            'image' => '${require(`./img/projects/fitmadmara.jpg`)}',
            'description' => 'Wordpress blog template, created by the students of Silesian University, who practise their journalist\'s workshop through the blogosphere.'
        ]
    ],

    'cv_url' => 'http://www.wiktormazur.pl/CV_EN.pdf',
    'cv_menu_label' => 'CV',

    'contact_hash' => 'contact',
    'contact_menu_label' => 'Contact',
    'contact_heading' => 'Do you want to work with me?',
    'contact_subheading' => 'Get in touch with me if you want me to prepare a detailed pricing, hire me or cooperate in any other form!',
    'contact_email_label' => 'E-mail',
    'contact_email' => 'me@wiktormazur.pl',
    'contact_phone_label' => 'Phone number',
    'contact_phone' => '+48 510 487 841',
    'contact_facebook_label' => 'Facebook',
    'contact_facebook' => 'fb.com/mazur.wiktor',
    'contact_facebook_url' => 'https://www.facebook.com/mazur.wiktor',

    'GA_ID' => 'UA-107624894-1'
];

$lang = array_shift( ( explode( '.', $_SERVER['HTTP_HOST'] ) ) );

if ( $lang === 'en' ) $l = $lang_en;
else $l = $lang_pl;
?>
<!DOCTYPE html>
<html lang="<?=$l['lang'];?>" dir="ltr">
    <head>
        <meta charset="UTF-8">

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        
        <meta property="og:site_name" content="Wiktor Mazur">
        <meta property="og:url" content="http://wiktormazur.pl">
        <meta property="og:title" content="Wiktor Mazur | Web Developer">
         
        <link rel="apple-touch-icon" sizes="180x180" href="img/favicons/apple-touch-icon.png">
        <link rel="icon" type="image/png" href="img/favicons/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="img/favicons/favicon-16x16.png" sizes="16x16">
        <link rel="manifest" href="img/favicons/manifest.json">
        <link rel="mask-icon" href="img/favicons/safari-pinned-tab.svg" color="#fc0fc0">
        <link rel="shortcut icon" href="img/favicons/favicon.ico">
        <meta name="apple-mobile-web-app-title" content="Wiktor Mazur">
        <meta name="application-name" content="Wiktor Mazur">
        <meta name="msapplication-config" content="img/favicons/browserconfig.xml">
        <meta name="theme-color" content="#000000">

        <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,700&amp;subset=latin-ext" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700&amp;subset=latin-ext" rel="stylesheet">

        <title>Wiktor Mazur :: Web Developer</title>
    </head>
<body>
    <div class='page-wrapper'>
        <header class='page-header page-header--mobile-sticky' id='naglowek'>
            <h1 class='sr-only'><?=$l['page_heading'];?></h1>

            <div class='page-header__logo-wrapper' aria-hidden='true'>
                <img class='page-header__logo-wrapper__logo page-header__logo-wrapper__logo--default' src='img/logo.png' alt=''>
                <div class='page-header__logo-wrapper__logo page-header__logo-wrapper__logo--wide'>
                    <div class='page-header__logo-wrapper__logo__text page-header__logo-wrapper__logo__text--wiktormazur'></div>
                    <div class='page-header__logo-wrapper__logo__text page-header__logo-wrapper__logo__text--codingwithpassion'></div>
                </div>
                <img class='page-header__logo-wrapper__logo page-header__logo-wrapper__logo--mini' src='img/logo-mini.png' alt=''>
            </div>

            <nav class='page-navigation' id='nawigacja'>
                <h2 class='sr-only'><?=$l['nav_heading'];?></h2>
                <button id='openMenu' class='openMenu menu-hamburger'><span></span><span></span><span></span><span class='sr-only'><?=$l['nav_open_menu'];?></span></button>
                <ul id='menu' class='page-navigation__menu'>
                    <li class='page-navigation__menu__item'><button id='closeMenu' class='closeMenu' aria-label='<?=$l['nav_close_menu'];?>'>X</button></li>
                    <li class='page-navigation__menu__item'><a class='scrollLink' href='#<?=$l['about_hash'];?>'><?=$l['about_menu_label'];?></a></li>
                    <li class='page-navigation__menu__item'><a class='scrollLink' href='#<?=$l['offert_hash'];?>'><?=$l['offert_menu_label'];?></a></li>
                    <li class='page-navigation__menu__item'><a class='scrollLink' href='#<?=$l['portfolio_hash'];?>'><?=$l['portfolio_menu_label'];?></a></li>
                    <li class='page-navigation__menu__item'><a href='<?=$l['cv_url'];?>'><?=$l['cv_menu_label'];?></a></li>
                    <li class='page-navigation__menu__item'><a class='scrollLink' href='#<?=$l['contact_hash'];?>'><?=$l['contact_menu_label'];?></a></li>
                    <li class='page-navigation__menu__item'><a href='<?=$l['change_lang_url'];?>' lang='<?=$l['change_lang_dest_lang'];?>' aria-label='<?=$l['change_lang_description'];?>'>[ <?=$l['change_lang_label'];?> ]</a></li>
                </ul>
            </nav>

            <div class='page-header__animation-wrapper'>
                <div class="particle particle--1"></div>
                <div class="particle particle--2"></div>
                <div class="particle particle--3"></div>
                <div class="particle particle--4"></div>
            </div>

            <div class='page-header__arrow-bottom'></div>
        </header>
        <main id='<?=$l['main_content_hash'];?>'>
            <h2 class='sr-only'><?=$l['main_content_heading'];?></h2>
            
            <section class='page-section about'>
                <div class='about__wrapper' id='<?=$l['about_hash'];?>' data-name='<?=$l['about_menu_label'];?>'>
                    <div class='about__wrapper__text'>
                        <h3 id='about-header' class='section-heading'><?=$l['about_heading'];?></h3>

                        <div id='about-text'>
                            <?=$l['about_content'];?>
                        </div>
                    </div>
                </div>
            </section>

            <section class='page-section offert' id='<?=$l['offert_hash'];?>' data-name='<?=$l['offert_menu_label'];?>'>
                <div class='offert__heading-wrapper'>
                    <h3 class='section-heading offert__heading-wrapper__item'><?=$l['offert_heading'];?></h3>
                </div>
                <dl class='offert__wrapper'>
                <?php
                foreach ( $l['offert_content'] as $offert_item )
                {
                    echo '
                    <div class=\'offert__item\'>
                        <dt class=\'offert__item__heading\'>'.$offert_item['heading'].'</dt>
                        <dd class=\'offert__item__text\'>'.$offert_item['content'].'</dd>
                    </div>';
                }
                ?>
                </dl>
            </section>

            <section class='page-section portfolio' id='<?=$l['portfolio_hash'];?>' data-name='<?=$l['portfolio_menu_label'];?>'>
                <h3 class='section-heading'><?=$l['portfolio_heading'];?></h3>

                <ul class='portfolio__list'>
                <?php
                foreach ( $l['portfolio_content'] as $portfolio_item )
                {
                    echo '
                    <li class=\'portfolio__list__item\'>
                        <article>
                            <a aria-hidden=\'true\' href=\''.$portfolio_item['url'].'\' class=\'portfolio__list__item__image\' style=\'background-image:url("'.$portfolio_item['image'].'");\'>
                                <div class=\'portfolio__list__item__image__overlay\'>
                                    <p class=\'portfolio__list__item__heading\'>'.$portfolio_item['heading'].'</p>
                                </div>
                            </a>
                            <div class=\'portfolio__list__item__description\'>
                                <span class=\'portfolio__list__item__subheading\' aria-hidden=\'true\'>'.$portfolio_item['subheading'].'</span>
                                <h4 class=\'portfolio__list__item__heading\'>'.$portfolio_item['heading'].'</h4>
                                <p>'.$portfolio_item['description'].'</p>
                                <a class=\'button button--small button--portfolio\' href=\''.$portfolio_item['url'].'\' aria-label=\''.$portfolio_item['url_label'].'\'>'.$l['portfolio_visit'].'</a>
                            </div>
                        </article>
                    </li>';
                }
                ?>
                </ul>
            </section>

            <section class='page-section contact' id='<?=$l['contact_hash'];?>' data-name='<?=$l['contact_menu_label'];?>'>
                <h3 id='contact-heading' class='section-heading'><?=$l['contact_heading'];?></h3>
                <p id='contact-subheading'><?=$l['contact_subheading'];?></p>
                <dl class='contact__info-wrapper'>
                    <div class='contact__item'>
                        <span class='contact__item__icon icon-mail-alt' aria-hidden='true'></span>
                        <div>
                            <dt id='c-email' class='contact__item__key'><?=$l['contact_email_label'];?></dt>
                            <dd class='contact__item__value'><a href='mailto:<?=$l['contact_email'];?>' aria-labelledby='c-email'><?=$l['contact_email'];?></a></dd>
                        </div>
                    </div>

                    <div class='contact__item'>
                        <span class='contact__item__icon icon-phone-squared' aria-hidden='true'></span>
                        <div>
                            <dt id='c-phone' class='contact__item__key'><?=$l['contact_phone_label'];?></dt>
                            <dd class='contact__item__value'><a href='tel:<?=preg_replace('/\s+/', '', $l['contact_phone']);?>' aria-labelledby='c-phone'><?=$l['contact_phone'];?></a></dd>
                        </div>
                    </div>

                    <div class='contact__item'>
                        <span class='contact__item__icon icon-facebook-official' aria-hidden='true'></span>
                        <div>
                            <dt id='c-facebook' class='contact__item__key'><?=$l['contact_facebook_label'];?></dt>
                            <dd class='contact__item__value'><a href='<?=$l['contact_facebook_url'];?>' aria-labelledby='c-facebook'><?=$l['contact_facebook'];?></a></dd>
                        </div>
                    </div>
                </dl>
            </section>
        </main>
    </div>
<script async src="https://www.googletagmanager.com/gtag/js?id=<?=$l['GA_ID'];?>"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '<?=$l['GA_ID'];?>');
</script>
</body>
</html>