# Public utility docker containers

[![GitHub repo](https://img.shields.io/badge/github-repo-blue.svg)](https://github.com/meltwater/docker-mlabs)
[![GitHub license](https://img.shields.io/github/license/meltwater/docker-mlabs.svg)](./LICENSE.txt)
[![Docker Build Status](https://img.shields.io/docker/build/meltwater/mlabs.svg)](https://hub.docker.com/r/meltwater/mlabs/)

## Development

Each top level folder corresponds to a triggered build on Docker Hub.
Pushing a new tag to GitHub will trigger a build and tag a new image on Docker Hub.

Tags must be of the form `{folder}-{version}`, e.g., `http-1.0.0`.

Additionally, pushing to master will build all containers
and update the corresponding latest tag name.

These triggered builds must be configured for all new containers.

## License

These containers are licensed under the MIT license.

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
