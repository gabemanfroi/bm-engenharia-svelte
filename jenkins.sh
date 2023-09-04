#!/bin/bash
su - jenkins <<!
jenkins
docker tag gabemanfroi/bm_engenharia:production gabemanfroi/bm_engenharia:production
docker push gabemanfroi/bm_engenharia:production
microk8s kubectl delete -f /home/gabriel/ps_hosted_websites/bm_engenharia/deployment.yml
microk8s kubectl apply -f /home/gabriel/ps_hosted_websites/bm_engenharia/deployment.yml
docker rmi gabemanfroi/bm_engenharia:production
!
