/**
 * Created by shilei on 2017/2/24.
 */
function SearchClick(self){
    document.getElementById('Click').classList.add('SearchBlock');
    self.className = 'SearchImg DeepFont';
    var SearchContent = self.value;
    if(SearchContent == 'Please enter a search content.'){
        self.value = '';
    }
}
function BackgroundClick(self) {
    document.getElementById('Click').classList.remove('SearchBlock');
    var SearchContent = self.value;
    if(SearchContent == 'Please enter a search content.' || SearchContent.trim().length == 0){
        self.value = 'Please enter a search content.';
        self.className = 'SearchImg ShallowFont'
    }
}

// function SubmitForm() {
//     document.getElementById('form').submit();
// }
function MagnifyingGlass(self) {
    var ox = self.previousElementSibling;
    if(ox.className == ""){
        document.getElementById('Engines').classList.add('Hidden');
    }else{
        document.getElementById('Engines').classList.remove('Hidden');
    }
}
function HiddenEngines(self){
    var ss = self.parentElement.children;
    for (k = 0; k < ss.length; k++) {
        if (self == ss[k]) {
            ss[k].style.opacity='1';
            var SearchEngineTab = ss[k].getAttribute('id');
            if(SearchEngineTab=='Google'){
                FormTabAction='https://www.google.com.hk/search';
                InputTagName='q';
            }
            else if(SearchEngineTab=='Bing'){
                FormTabAction='http://cn.bing.com/search';
                InputTagName='q';
            }
            else if(SearchEngineTab=='Yahoo'){
                FormTabAction='http://search.yahoo.com/bin/search';
                InputTagName='q';
            }
            else if(SearchEngineTab=='Wiki'){
                FormTabAction='https://wiki.shileizcc.com/dosearchsite.action';
                InputTagName='queryString';
            }else{
                FormTabAction='https://www.baidu.com/s';
                InputTagName='wd';
            };
        } else {
            ss[k].style.opacity='0.5';
        }

    }
    document.getElementById('FormEngines').setAttribute('action',FormTabAction);
    document.getElementById('InputEngines').setAttribute('name',InputTagName);
}


