#!/usr/bin/env python
# -*- coding:utf-8 -*-

from jinja2 import Template
import os

def index():
    with open("template.json") as fd:
        result = fd.read()

    template = Template(result)
    data = template.render(MetadataName=os.getenv('MetadataName'),
                           MetadataNamespace=os.getenv('MetadataNamespace'),
                           MetadataVersion=os.getenv('MetadataVersion'),
                           SpecReplicas=os.getenv('SpecReplicas'),
                           SpecTemplateMetadataLabelsVersi=os.getenv('SpecTemplateMetadataLabelsVersion'),
                           ContainerImage=os.getenv('ContainerImage'),
                           ServicesName=os.getenv('ServicesName'),
                           AppName=os.getenv('AppName'),
                           CPU=os.getenv('CPU'),
                           MEM=os.getenv('MEM'),
                           PortsName=os.getenv('PortsName'),
                           PortsEndpoint=os.getenv('PortsEndpoint'),
                           volumeMountsName=os.getenv('volumeMountsName'),
                           volumeMountsEndpoint=os.getenv('volumeMountsEndpoint'),
                           volumesName=os.getenv('volumesName'),
                           volumesEndpoint=os.getenv('volumesEndpoint'),
                            )
    print(data)

index()

