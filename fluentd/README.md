# Fluentd Log Daemon for Kubernetes

Collects logs on Kubernetes nodes with [Fluentd]
and sends them to [S3] and [Elasticsearch].

All containers with names prefixed by `mlabs-` are assumed
to log JSON which is sent to Elasticsearch.
All other logs are sent to S3.

[Elasticsearch]: https://www.elastic.co/products/elasticsearch
[Fluentd]: https://www.fluentd.org/
[S3]: https://aws.amazon.com/s3/

## Environment Variables

### AWS S3

- `S3_KEY_ID='AKIAIOSFODNN7EXAMPLE'`
- `S3_SEC_KEY='wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'`
- `S3_REGION='us-east-1'`
- `CLUSTER='prod'`
- `HOSTNAME='example'`

### Meltwater Labs Elasticsearch

- `MLABS_ELASTICSEARCH_HOST='es.example.com'`
- `MLABS_ELASTICSEARCH_PORT='9243'`
- `MLABS_ELASTICSEARCH_USER='fluentd'`
- `MLABS_ELASTICSEARCH_PASSWORD='password'`

### Executive Alerts Elasticsearch

- `EA_ELASTICSEARCH_HOST='es.example.com'`
- `EA_ELASTICSEARCH_PORT='9243'`
- `EA_ELASTICSEARCH_USER='fluentd'`
- `EA_ELASTICSEARCH_PASSWORD='password'`
- `EA_ELASTICSEARCH_SCHEME='https'`
- `EA_ELASTICSEARCH_RELOAD_CONNECTIONS='true'`
- `EA_ELASTICSEARCH_LOGSTASH_PREFIX='logstash'`

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
