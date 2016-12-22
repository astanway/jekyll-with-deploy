To write a post: copy the example in _posts

To build/serve locally: `jekyll serve` / `jekyll build`

To deploy: `sh deploy.sh`

Make sure to update deploy.sh with your server.

Deploy.sh generates a `_site` directory and `rsyncs` it to the server. `_site` contains the generated static site in its entirety.