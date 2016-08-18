$(document).ready(function() {
	// Model

	var Model = {
		user: {
			username: undefined,
			loggedIn: false,
			userId: undefined
		},
		categories: undefined,
		articles: [
			{
				title: '1',
				titleUrl: 'http://mashable.com/2016/07/21/cheap-thrills-veena-cover/',
				featuredImage: 'http://i.amz.mshcdn.com/wB2HLbw1XpLwzQBnaQivWm-KD_4=/950x534/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fstory%2Fthumbnail%2F15170%2Fsddefault.jpg',
				content: 'lorem ipsum',
				source: 'NYT',
				bookmarked: false,
				category: 'cat1',
				feedrCategory: ''
			},
			{
				title: '2',
				titleUrl: 'http://mashable.com/2016/07/21/paul-mccartney-concert-in-360-degrees/',
				featuredImage: 'http://i.amz.mshcdn.com/L_9u_4ZUmVyyh4UmK7mdFUCRxRc=/950x534/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fstory%2Fthumbnail%2F15058%2Fe082211bc6dd4805955737eb42cb3037.png',
				content: 'lorem ipsum 2',
				source: 'WAPO',
				bookmarked: true,
				category: 'cat2',
				feedrCategory: ''
			}
		]
	}

	// View

	// Compile the template outside of the function, so that we only do it once
	// instead of on every render.

	function renderUser() {
		//User Template
		var userTemplateSource = $('#user-template').html();
		userTemplate = Handlebars.compile(userTemplateSource);
		var userHtml = userTemplate(Model);
		$('#loginContainer').html(userHtml);
	}

	function renderCategories() {
	  	//Category Template
		var categoryTemplateSource = $('#category-template').html();
		categoryTemplate = Handlebars.compile(categoryTemplateSource);
	  	var categoryHtml = categoryTemplate(Model);
	  	$('#categories').html(categoryHtml);
	}

	function renderArticles() {
		//Article Template
		var articleTemplateSource = $('#article-template').html();
		articleTemplate = Handlebars.compile(articleTemplateSource);
		var articleHtml = articleTemplate(Model);
		$('#articles').html(articleHtml);
	}

	// Controller

	function setup() {
		// First render
		renderUser();

		// Setup Listeners
		$('#loginSubmit').on('click', loginUser);
		$('section').on('click', 'span', changeCategory);
	}

	function loginUser() {
		// Get the values entered by the user
		var name = $('input[id="username"]').val();

		// Update Model
		$.post('http://jacobfriedmann.com:3010/login', { username: name }, function(data) {
			Model.user.username = name;
			Model.user.loggedIn = true;
			Model.user.userId = data.userId;
		// Re-render View
			loadUserCategories();
	      	loadUserArticles();
			renderUser();
		});
	}

	function loadUserCategories() {
		// Get Data
		$.get('http://jacobfriedmann.com:3010/categories?userId=' + Model.user.userId, function(data) {
			Model.categories = data;
		// Update Category View
			renderCategories();
		});
	}

	function loadUserArticles() {
		$.get('/feed?userId=' + Model.user.userId, function (data) {
      		Model.articles = data;
		// Update Article View
      		renderArticles();
    	});
	}

	function changeCategory() {
		var categoryIndex = $('span').index(this);
	  	var selectedCategory = Model.categories[categoryIndex];
	  	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
			  'api-key': "a3e5c6c1ae4d49d99f37ede847cc2897",
			  'fq': "news_desk:(\"" + selectedCategory.searchCategory + "\")"
			});
	  	if (selectedCategory.primary === false) {
	  		$.ajax({
			  url: url,
			  method: 'GET',
			}).done(function(data) {
				for (var i = 0; i < data.length; i++) {
				    articles.push({
				    	title: data.response.docs[i].headline.main,
						titleUrl: data.response[i].web_url,
						featuredImage: data.response[i].multimedia.url,
						content: data.response[i].snippet,
						source: data.response[i].source,
						bookmarked: false,
						category: data.response[i].news_desk,
						feedrCategory: selectedCategory.category,
				    });
				}
				console.log(Model.articles);
		      	renderArticles();		  
			}).fail(function(err) {
			  throw err;
			}); 
	  	}
	  	selectedCategory.primary = !selectedCategory.primary;
		renderCategories();
	}

	setup();
});
