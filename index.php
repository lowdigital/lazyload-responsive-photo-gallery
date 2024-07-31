<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Photo Gallery</title>
    
    <link rel="stylesheet" href="assets/app.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css" />
    <link rel="stylesheet" href="https://unpkg.com/tippy.js@6/dist/tippy.css" />
</head>
<body>
    <div class="gallery-container">
        <?php
            $data = file_get_contents('data.html');
            
            $user_agent = $_SERVER['HTTP_USER_AGENT'];
            $bots = [
                'googlebot', 'bingbot', 'yandexbot', 'duckduckbot', 'slurp', 'baiduspider', 
                'sogou', 'exabot', 'facebot', 'ia_archiver', 'msnbot', 'teoma', 'robozilla',
                'gigabot', 'scooter', 'altavista', 'askjeeves', 'lycos', 'webcrawler', 
                'mediapartners-google', 'adsbot-google', 'bot', 'spider', 'crawler', 'feedfetcher-google'
            ];
    
            $is_bot = false;
            foreach ($bots as $bot) {
                if (stripos($user_agent, $bot) !== false) {
                    $is_bot = true;
                    break;
                }
            }
            
            if ($is_bot) str_replace("data-src", "src", $data);
            
            echo $data;
        ?>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"></script>
    <script src="https://unpkg.com/@popperjs/core@2"></script>
    <script src="https://unpkg.com/tippy.js@6"></script>
    <script src="assets/app.js"></script>
</body>
</html>