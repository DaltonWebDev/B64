# B64
This is a URL redirection service powered by nothing except vanilla JavaScript! We got #2 on Product Hunt on December 31st (https://producthunt.com/posts/b64)


Check out https://1mb.site for free website hosting. Otherwise rename 200.html to index.html if hosting anywhere else and add this .htaccess:

```
DirectoryIndex index.html
RewriteEngine On

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^[^.]+$ index.html [L]
```
