<?php

declare(strict_types=1);

$publicPath = __DIR__.'/public';
$requestPath = urldecode(parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/');
$candidate = realpath($publicPath.$requestPath);

if ($candidate !== false && str_starts_with($candidate, realpath($publicPath)) && is_file($candidate)) {
    $mimeType = mime_content_type($candidate) ?: 'application/octet-stream';

    header('Content-Type: '.$mimeType);
    header('Cache-Control: public, max-age=31536000, immutable');
    readfile($candidate);

    return;
}

$_SERVER['SCRIPT_NAME'] = '/index.php';
$_SERVER['SCRIPT_FILENAME'] = $publicPath.'/index.php';
$_SERVER['PHP_SELF'] = '/index.php';

require $publicPath.'/index.php';
