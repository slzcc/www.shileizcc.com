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

    Account = "aliyunhub"

//    withDockerRegistry([credentialsId: 'aliyunhub', url: 'https://registry.aliyuncs.com/']) {
    docker.withRegistry("${Registry_url}"[, "${Account}"]) {
      def newContainers = docker.build "${Maintainer_name}/${Container_name}:${Tag}-${Commit}"

      echo "****************************************************************************************************************"
      echo "The Demo Image is ${Registry_addr}/${Maintainer_name}/${Container_name}:${Tag}-${Commit}"
      echo "****************************************************************************************************************"
      
      stage('Docker Push')
      //  input "请确保上述没问题后，Push 远程仓库！"
        newContainers.push()

    }
}
