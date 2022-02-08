#!/bin/sh
set -e

unset http_proxy
unset HTTP_PROXY
unset https_proxy
unset HTTPS_PROXY

cd /usr/src/app

echo "CRATEDB HOST Name: ${CRATEDB_HOSTNAME}"
sed -i "s/CRATEDB_HOSTNAME/${CRATEDB_HOSTNAME}/" src/assets/data/config.json
sed -i "s/PERF_INFLUXDB_HOSTNAME/${PERF_INFLUXDB_HOSTNAME}/" src/assets/data/config.json
sed -i "s/SYSTEM_INFLUXDB_HOSTNAME/${SYSTEM_INFLUXDB_HOSTNAME}/" src/assets/data/config.json
sed -i "s/ELASTICSEARCH_HOSTNAME/${ELASTICSEARCH_HOSTNAME}/" src/assets/data/config.json
sed -i "s/AWR_REPORT_HOSTNAME/${AWR_REPORT_HOSTNAME}/" src/assets/data/config.json

npm start


