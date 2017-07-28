node(){
  stage('Clean up the residual')
    sh 'rm -rf ${WORKSPACE}/*'

  stage "GIt"
    git "https://github.com/slzcc/www.shileizcc.com"
    Commit = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()

  stage "Build"

    Registry_url="https://registry.aliyuncs.com/"
    Registry_addr="registry.aliyuncs.com"
    Maintainer_name="slzcc"
    Container_name="nginx"
    Tag="gateway"
    ContainerImage = "${Registry_addr}/${Maintainer_name}/${Container_name}:${Tag}-${Commit}"

    Account = "aliyunhub"

    docker.withRegistry("${Registry_url}", "${Account}") {
      def newContainers = docker.build "${Registry_addr}/${Maintainer_name}/${Container_name}:${Tag}-${Commit}"

      echo "****************************************************************************************************************"
      echo "The Demo Image is ${Registry_addr}/${Maintainer_name}/${Container_name}:${Tag}-${Commit}"
      echo "****************************************************************************************************************"

      stage('Docker Push')
//        input "请确保上述没问题后，Push 远程仓库！"
//        newContainers.push()

    }
    stage('准备环境变量')
     
        env.MetadataName = "gateway"
        env.MetadataNamespace = "default"
        env.MetadataVersion = "v2"
        env.SpecReplicas = "1"
//        env.SpecTemplateMetadataLabelsVersion = env.MetadataVersion
        env.ContainerImage = "${ContainerImage}"
        env.ServicesName = "gateway"
        env.AppName = "cheese"
        env.CPU = "10m"
        env.MEM = "20Mi"
        env.PortsName = "http"
        env.PortsEndpoint = 80
        env.volumeMountsName = "config-volume"
        env.volumeMountsEndpoint = "/etc/nginx/conf.d"
        env.volumesName = "home"
        env.volumesEndpoint= "gateway"
        env.LC_ALL="C"
    
    stage('执行脚本生成模板 ')
     
        echo "-***************************************-"
        sh "python3 yaml_jinja2.py > ${WORKSPACE}/gateway.json"
        sh "python3 yaml_jinja2.py"
        echo "***************************************>"

//    stage('Update K8s Service 镜像')

//        sh 'curl -ik -H "Authorization: Bearer $(cat /var/run/secrets/kubernetes.io/serviceaccount/token)" -H "Content-Type:application/strategic-merge-patch+json" -X PATCH --data @gateway.yaml https://kubernetes.default/apis/extensions/v1beta1/namespaces/default/deployments/gateway'
    
}
