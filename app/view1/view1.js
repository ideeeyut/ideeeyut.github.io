'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

    //1 red
    //2 blue,
    //3 yellow & orange,
    //4 brown,
    //5 green,

.controller('View1Ctrl', ['$scope', '$log', function($scope, $log) {
        $scope.difficulty = 'easy';
        $scope.testedColors = [];

        var groups = ['Red', 'Blue & Purple', 'Yellow & Orange', 'Green & Brown'];

        $scope.getColors = function() {
            var colors = [
                {missed: 0, group: 1, color: 'Alizarin Crimson', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1001-15.jpg' },
                {missed: 0, group: 2, color: 'Andrew\'s Turquoise', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1004-15.jpg' },
                {missed: 0, group: 4, color: 'Burnt Sienna', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1016-15.jpg' },
                {missed: 0, group: 2, color: 'Cobalt Blue', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1040-15.jpg' },
                {missed: 0, group: 2, color: 'Cobalt Violet', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1043-15.jpg' },
                {missed: 0, group: 3, color: 'Gamboge Hue', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1049-15.jpg' },
                {missed: 0, group: 3, color: 'Halloween Orange', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1055-15.jpg' },
                {missed: 0, group: 3, color: 'Quinacridone Gold', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1056-15.jpg' },
                {missed: 0, group: 4, color: 'Hooker\'s Green Dark', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1058-15.jpg' },
                {missed: 0, group: 3, color: 'Indian Yellow', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1061-15.jpg' },
                {missed: 0, group: 2, color: 'Joe\'s Blue (Phthalo)', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1067-15.jpg' },
                {missed: 0, group: 2, color: 'Orchid', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1080-15.jpg' },
                {missed: 0, group: 2, color: 'Prussian Blue', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1097-15.jpg' },
                {missed: 0, group: 4, color: 'Raw Umber', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1115-15.jpg' },
                {missed: 0, group: 1, color: 'Rose Madder Quinacridone', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1121-15.jpg' },
                {missed: 0, group: 2, color: 'Royal Amethyst', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1122-15.jpg' },
                {missed: 0, group: 4, color: 'Sap Green', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1124-15.jpg' },
                {missed: 0, group: 4, color: 'Sepia', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1127-15.jpg' },
                {missed: 0, group: 4, color: 'Spring Green', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1136-15.jpg' },
                {missed: 0, group: 2, color: 'Ultramarine Blue', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1139-15.jpg' },
                {missed: 0, group: 1, color: 'Wild Fuchsia', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1145-15.jpg' },
                {missed: 0, group: 3, color: 'Yellow Ochre', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1148-15.jpg' },
                {missed: 0, group: 2, color: 'June Bug', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1201-15.jpg' },
                {missed: 0, group: 4, color: 'Rainforest', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1205-15.jpg' },
                {missed: 0, group: 1, color: 'Joe\'s Red', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1207-15.jpg' },
                {missed: 0, group: 3, color: 'Joe\'s Yellow', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1208-15.jpg' },
                {missed: 0, group: 4, color: 'Quinacridone Gold Deep', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1214-15.jpg' },
                {missed: 0, group: 2, color: 'Shadow', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1224-15.jpg' },
                {missed: 0, group: 4, color: 'Viridian', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1142-15.jpg' },
                {missed: 0, group: 3, color: 'Naples Yellow', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1076-15.jpg' },
                {missed: 0, group: 1, color: 'Cadmium Red Medium', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1025-15.jpg' },
                {missed: 0, group: 4, color: 'Coastal Fog', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1039-15.jpg' },
                {missed: 0, group: 2, color: 'Neutral Tint', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1223-15.jpg' },
            ];

            if($scope.difficulty === 'medium') {
                colors = colors.concat([
                    { missed: 0, group: 4, color: 'Burnt Umber', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1019-15.jpg' },
                    { missed: 0, group: 1, color: 'Raw Sienna', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1112-15.jpg' },
                    { missed: 0, group: 4, color: 'True Green', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1137-15.jpg' },
                    { missed: 0, group: 3, color: 'Aureolin', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1007-15.jpg' },
                    { missed: 0, group: 2, color: 'Arctic Ice', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1005-15.jpg' },
                    { missed: 0, group: 1, color: 'Apricot', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1006-15.jpg' },
                    { missed: 0, group: 4, color: 'Brown Derby', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1009-15.jpg' },
                    { missed: 0, group: 4, color: 'Brown Madder Quinacridone', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1010-15.jpg' },
                    { missed: 0, group: 3, color: 'Bumblebee Yellow', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1013-15.jpg' },
                    { missed: 0, group: 3, color: 'Cadmium Orange', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1022-15.jpg' },
                    { missed: 0, group: 1, color: 'Cadmium Scarlet', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1028-15.jpg' },
                    { missed: 0, group: 3, color: 'Cadmium Yellow Medium', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1031-15.jpg' },
                    { missed: 0, group: 3, color: 'Cadmium Yellow Light', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1034-15.jpg' },
                    { missed: 0, group: 2, color: 'Cerulean Blue', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1037-15.jpg' },
                    { missed: 0, group: 4, color: 'Coffee With Cream', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1044-15.jpg' },
                    { missed: 0, group: 3, color: 'Quinacridone Burnt Orange', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1045-15.jpg' },
                    { missed: 0, group: 1, color: 'Fire Engine Red', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1046-15.jpg' },
                    { missed: 0, group: 2, color: 'Getz Gray', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1052-15.jpg' },
                    { missed: 0, group: 4, color: 'Hooker\'s Green Light', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1059-15.jpg' },
                    { missed: 0, group: 1, color: 'Indian Red', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1060-15.jpg' },
                    { missed: 0, group: 2, color: 'Arctic Ice', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1005-15.jpg' },
                    { missed: 0, group: 1, color: 'Apricot', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1006-15.jpg' },
                    { missed: 0, group: 4, color: 'Brown Derby', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1009-15.jpg' },
                    { missed: 0, group: 4, color: 'Brown Madder Quinacridone', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1010-15.jpg' },
                    { missed: 0, group: 3, color: 'Bumblebee Yellow', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1013-15.jpg' },
                    { missed: 0, group: 3, color: 'Cadmium Orange', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1022-15.jpg' },
                    { missed: 0, group: 1, color: 'Cadmium Scarlet', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1028-15.jpg' },
                    { missed: 0, group: 3, color: 'Cadmium Yellow Medium', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1031-15.jpg' },
                    { missed: 0, group: 3, color: 'Cadmium Yellow Light', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1034-15.jpg' },
                    { missed: 0, group: 2, color: 'Cerulean Blue', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1037-15.jpg' },
                    { missed: 0, group: 4, color: 'Coffee With Cream', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1044-15.jpg' },
                ]);
            }

            return colors;
        };

        //{ missed: 0, group: 3, color: 'Quinacridone Burnt Orange', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1045-15.jpg' },
        //{ missed: 0, group: 1, color: 'Fire Engine Red', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1046-15.jpg' },
        //{ missed: 0, group: 2, color: 'Getz Gray', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1052-15.jpg' },
        //{ missed: 0, group: 4, color: 'Hooker\'s Green Light', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1059-15.jpg' },
        //{ missed: 0, group: 1, color: 'Indian Red', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1060-15.jpg' },
        //{ missed: 0, group: 2, color: 'Indigo', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1064-15.jpg' },
        //{ missed: 0, group: 4, color: 'Joe\'s Green (Phthalo)', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1070-15.jpg' },
        //{ missed: 0, group: 2, color: 'Lamp Black', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1071-15.jpg' },
        //{ missed: 0, group: 1, color: 'Quinacridone Burnt Scarlet', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1072-15.jpg' },
        //{ missed: 0, group: 2, color: 'Manganese Blue (Mixture)', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1073-15.jpg' },
        //{ missed: 0, group: 4, color: 'Mint Julep', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1074-15.jpg' },
        //{ missed: 0, group: 4, color: 'Quinacridone Sienna', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1078-15.jpg' },
        //{ missed: 0, group: 4, color: 'Olive', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1079-15.jpg' },
        //{ missed: 0, group: 2, color: 'Passionate Purple', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1082-15.jpg' },
        //{ missed: 0, group: 2, color: 'Payne\'s Gray', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1085-15.jpg' },
        //{ missed: 0, group: 3, color: 'Peachy Keen', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1088-15.jpg' },
        //{ missed: 0, group: 2, color: 'Periwinkle', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1089-15.jpg' },
        //{ missed: 0, group: 1, color: 'Permanent Magenta', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1091-15.jpg' },
        //{ missed: 0, group: 1, color: 'Permanent Rose Quinacridone', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1094-15.jpg' },
        //{ missed: 0, group: 1, color: 'Quinacridone Red', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1095-15.jpg' },
        //{ missed: 0, group: 1, color: 'Poppy', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1096-15.jpg' },
        //{ missed: 0, group: 2, color: 'Quinacridone Violet', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1106-15.jpg' },
        //{ missed: 0, group: 1, color: 'Rambling Rose Quinacridone', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1109-15.jpg' },
        //{ missed: 0, group: 1, color: 'Red Hot Momma', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1118-15.jpg' },
        //{ missed: 0, group: 2, color: 'Reddish Black', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1119-15.jpg' },
        //{ missed: 0, group: 2, color: 'Sag Harbor Gray', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1123-15.jpg' },
        //{ missed: 0, group: 4, color: 'Skips Green', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1130-15.jpg' },
        //{ missed: 0, group: 2, color: 'Sky Blue', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1131-15.jpg' },
        //{ missed: 0, group: 3, color: 'Sour Lemon Hansa', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1133-15.jpg' },
        //{ missed: 0, group: 4, color: 'Titanium White', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1138-15.jpg' },
        //{ missed: 0, group: 2, color: 'Ultramarine Violet', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1140-15.jpg' },
        //{ missed: 0, group: 4, color: 'Earthen Green', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1200-15.jpg' },
        //{ missed: 0, group: 1, color: 'Taylor\'s Flamingo Pink', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1202-15.jpg' },
        //{ missed: 0, group: 2, color: 'Midnight Blue', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1203-15.jpg' },
        //{ missed: 0, group: 2, color: 'Egyptian Blue Hue', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1204-15.jpg' },
        //{ missed: 0, group: 1, color: 'Ornamental Red', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1206-15.jpg' },
        //{ missed: 0, group: 2, color: 'Blue Stone', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1209-15.jpg' },
        //{ missed: 0, group: 2, color: 'Blue Bice Hue', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1210-15_1.jpg' },
        //{ missed: 0, group: 1, color: 'Coral Red', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1211-15.jpg' },
        //{ missed: 0, group: 2, color: 'Prussian Blue (Green Shade)', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1212-15.jpg' },
        //{ missed: 0, group: 2, color: 'Raw Umber Violet', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1213-15.jpg' },
        //{ missed: 0, group: 2, color: 'Pat\'s Coastal Blue', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1215-15.jpg' },
        //{ missed: 0, group: 3, color: 'Carr Yellow', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1216-15.jpg' },
        //{ missed: 0, group: 4, color: 'Transparent Oxide Brown', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1217-15.jpg' },
        //{ missed: 0, group: 4, color: 'Transparent Oxide Red', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1218-15.jpg' },
        //{ missed: 0, group: 4, color: 'Transparent Oxide Yellow', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1219-15.jpg' },
        //{ missed: 0, group: 2, color: 'Janet\'s Violet Rose', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1220-15.jpg' },
        //{ missed: 0, group: 4, color: 'Buff Titanium', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1221-15.jpg' },
        //{ missed: 0, group: 2, color: 'French Gray', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1222-15.jpg' },
        //{ missed: 0, group: 4, color: 'Green Gold', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj1225-15.jpg' },
        //{ missed: 0, group: 4, color: 'Mummy', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj5315-15.jpg' },
        //{ missed: 0, group: 2, color: 'Han Purple', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj5615-15.jpg' },
        //{ missed: 0, group: 2, color: 'Vivianite', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj5715-15.jpg' },
        //{ missed: 0, group: 1, color: 'Potter\'s Pink Natural', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj5815-15.jpg' },
        //{ missed: 0, group: 2, color: 'Egyptian Blue', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj5915-15.jpg' },
        //{ missed: 0, group: 2, color: 'Azurite Genuine', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj6715-15.jpg' },
        //{ missed: 0, group: 4, color: 'Red Iron Oxide Natural', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj7715-15.jpg' },
        //{ missed: 0, group: 4, color: 'Hematite Burnt Scarlet', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj7815-15.jpg' },
        //{ missed: 0, group: 4, color: 'Hematite Violet', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj7915-15.jpg' },
        //{ missed: 0, group: 2, color: 'Lapis Lazuli', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj8015-15.jpg' },
        //{ missed: 0, group: 2, color: 'Magnetite Genuine', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj8115-15.jpg' },
        //{ missed: 0, group: 4, color: 'Natural Gold Ochre', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj8215-15.jpg' },
        //{ missed: 0, group: 4, color: 'Olive Oxide', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj8315-15.jpg' },
        //{ missed: 0, group: 4, color: 'Brown Ochre Goethite', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj8515-15.jpg' },
        //{ missed: 0, group: 2, color: 'Natural Hematite', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj8715-15.jpg' },


        //{ missed: 0, group: 1, color: 'Iridescent Alizarin Crimson Quinacridone', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj9001-15.jpg' },
        //{ missed: 0, group: 4, color: 'Iridescent Burnt Sienna', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj9016-15.jpg' },
        //{ missed: 0, group: 3, color: 'Iridescent Quinacridone Burnt Orange', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj9045-15.jpg' },
        //{ missed: 0, group: 3, color: 'Iridescent Gamboge Hue', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj9049-15.jpg' },
        //{ missed: 0, group: 3, color: 'Iridescent Halloween Orange', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj9055-15.jpg' },
        //{ missed: 0, group: 2, color: 'Iridescent Joe\'s Blue', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj9067-15.jpg' },
        //{ missed: 0, group: 4, color: 'Iridescent Joe\'s Green', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj9070-15.jpg' },
        //{ missed: 0, group: 1, color: 'Iridescent Quinacridone Red', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj9095-15.jpg' },
        //{ missed: 0, group: 1, color: 'Iridescent Rambling Rose Quinacridone', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj9109-15.jpg' },
        //{ missed: 0, group: 4, color: 'Iridescent Raw Sienna', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj9112-15.jpg' },
        //{ missed: 0, group: 1, color: 'Iridescent Red Hot Momma', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj9118-15_1.jpg' },
        //{ missed: 0, group: 3, color: 'Iridescent Sour Lemon', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj9133-15.jpg' },
        //{ missed: 0, group: 2, color: 'Iridescent Ultramarine Blue', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj9139-15.jpg' },
        //{ missed: 0, group: 1, color: 'Iridescent Rose Dore Quinacridone', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj9150-15.jpg' },
        //{ missed: 0, group: 1, color: 'Iridescent Hot Tamale', src: 'http://cdn1.cheapjoes.com/806878/magento/media/catalog/product/cache/1/color_swatch/9df78eab33525d08d6e5fb8d27136e95/0/0/00cs-aj9151-15.jpg' },


        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex ;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }

        $scope.checkGuess = function() {
            $scope.correct = $scope.selectedColor.color.toLowerCase() === $scope.quizColor.color.toLowerCase();
            $scope.attempts++;
            if(!$scope.correct) {
                $scope.showHint = true;

                var idx = $scope.testedColors.indexOf($scope.quizColor);

                if(idx >= 0) {
                    $scope.testedColors[idx].missed++;
                }
                else {
                    $scope.quizColor.missed++;
                    $scope.testedColors.push($scope.quizColor);
                }
            }
            else {
                $scope.reset();
            }
        };

        $scope.reset = function() {
            var group = Math.floor(Math.random() * groups.length);

            $scope.group = groups[group];

            var colors = $scope.getColors();

            $log.debug('Colors: ' + colors.length);
            var groupColors = shuffle(colors.filter(function(item) {
                return item.group === group + 1;
            }));

            $scope.attempts = 0;
            $scope.correct = false;

            $scope.choices = groupColors.slice(0, 4);

            $scope.quizColor = $scope.choices[Math.floor(Math.random() * $scope.choices.length)];

            $scope.showHint = false;
            $scope.ready = false;

            $scope.selectedColor = {
                color: ''
            };

            $scope.statistics = [];

        };

        $scope.showStatistics = function() {
            $scope.testedColors.sort(function(left, right) {
               return left.missed > right.missed;
            });

            $scope.statistics = $scope.testedColors.slice(0, 5);

        }
        $scope.reset();

    }]);