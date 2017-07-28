node(){
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
     
        env.MetadataName = "jenkins"
        env.MetadataNamespace = "default"
        env.MetadataVersion = "v2"
        env.SpecReplicas = "1"
        env.SpecTemplateMetadataLabelsVersion = MetadataVersion
        env.ContainerImage = "${ContainerImage}"
        env.ServicesName = "jenkins"
        env.AppName = "cheese"
        env.CPU = "1000m"
        env.MEM = "600Mi"
        env.PortsName = "http"
        env.PortsEndpoint = 8080
        env.volumeMountsName = "home"
        env.volumeMountsEndpoint = "/var/jenkins_home"
        env.volumesName = "home"
        env.volumesEndpoint= "/var/jenkins_home"
        sh 'sleep 1234'
    
    stage('执行脚本生成模板 ')
     
        echo "-***************************************-"
        sh "python3 jinja2.py"
        echo "***************************************>"
}
