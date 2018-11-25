#!/bin/bash

mesg-core service start $BTC_SERVICE
mesg-core service start $EVM_SERVICE
mesg-core service start $CHAINPOINT_SERVICE

node start.sh