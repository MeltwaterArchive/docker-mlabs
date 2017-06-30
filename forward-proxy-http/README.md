# Nginx HTTP Forward Proxy

Starts a [Nginx] HTTP server on port 80 which forwards all
requests to an external host.

Does not pass the `Cf-Connecting-Ip` header to the proxied host:
this allows proxying within a single [Cloudflare] zone.
Otherwise Cloudflare will return
[Error 1000: DNS points to prohibited IP][Error 1000].

[Cloudflare]: https://www.cloudflare.com/l
[Error 1000]: https://support.cloudflare.com/hc/en-us/articles/200171976-Error-1000-DNS-points-to-prohibited-IP
[Nginx]: https://www.nginx.com/

## Environment Variables

- `PROXY_PASS=https://example.com`

## License

This container is licensed under the MIT license.

## Warranty

This software is provided by the copyright holders and contributors "as is" and
any express or implied warranties, including, but not limited to, the implied
warranties of merchantability and fitness for a particular purpose are
disclaimed. In no event shall the copyright holder or contributors be liable for
any direct, indirect, incidental, special, exemplary, or consequential damages
(including, but not limited to, procurement of substitute goods or services;
loss of use, data, or profits; or business interruption) however caused and on
any theory of liability, whether in contract, strict liability, or tort
(including negligence or otherwise) arising in any way out of the use of this
software, even if advised of the possibility of such damage.
