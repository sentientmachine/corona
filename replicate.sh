#!/bin/bash

#This is just a little thingy to move it over to the place where it needs to be to host on external
#you'll need webspace and some nonzero experience in front end web development
#mount point has to be set manually
cp -r /home/el/bin/covid19/corona /mnt/machinesentience/public_html
cp -r /home/el/bin/covid19/corona/data.json /mnt/machinesentience/public_html/corona/data.json
cp -r /home/el/bin/covid19/javascripts /mnt/machinesentience/public_html
cp -r /home/el/bin/covid19/stylesheets /mnt/machinesentience/public_html
cp -r /home/el/bin/covid19/ajax /mnt/machinesentience/public_html
cp -r /home/el/bin/covid19/releases /mnt/machinesentience/public_html
cp /home/el/bin/covid19/main.html /mnt/machinesentience/public_html/main.html
cp /home/el/bin/covid19/.htaccess /mnt/machinesentience/public_html/.htaccess


