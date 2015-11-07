fis.match('*.{png,jpg,gif,ico,js,css,html}',{
	useHash:true
});

fis.match('*.js',{
	optimizer:fis.plugin('uglify-js')
});

fis.match('*.css',{
	optimizer:fis.plugin('clean-css')
});

fis.match('*.png',{
	optimizer:fis.plugin('png-compressor')
});