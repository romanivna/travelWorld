var Search = function(){
	var self = this;
	this.loadList = {
		'for_blog.json': false,
		'travel.json': false
	};

	this.row = 'title';

	this.searchWord = '';
	
	this.loadJSON = function(){
		for(var i in self.loadList){
			var path = i;
			var item = i;
			$.getJSON(path, function(data){
				if(typeof data['articles'] != 'undefined'){
					self.loadList['for_blog.json'] = data.articles;
				}else{
					self.loadList['travel.json'] = data.travels;
				}
				console.log('Loaded: ', data);
			}, function(){
				console.log('json file not found!');
			});
		}
	}

	this.checkOnReady = function(){
		for(var i in self.loadList){
			if(typeof self.loadList[i] != 'object'){
				return false;
			}
		}

		return true;
	}

	this.process = function(searchWord, str){

		searchWord = searchWord.toLowerCase();
		str = str.toLowerCase();

		var count = 0;

		var inx = 0;

		if(str.search(searchWord) == -1){
			return false;
		}

		return true;

	}

	this.go = function(word, callback){
		if(!self.checkOnReady()) return false;

		if(typeof word != 'string' || word == '')
			return false;

		for(var i in self.loadList){
			for(var n in self.loadList[i]){
				var item = self.loadList[i][n];

				if(self.process(word, item[self.row])) {
					if(typeof callback == 'function'){
						callback(item);
					}
				}

			}
		}

	}

	self.loadJSON();

}