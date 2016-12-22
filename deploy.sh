# This builds everything into _site and then rsyncs it over.
jekyll build
rm _site/deploy.sh
cp .htaccess _site/.htaccess
rsync -r -v -e "ssh -l abasababa" _site/ yourserver.com:~/destination # replace this with your site hosting info
