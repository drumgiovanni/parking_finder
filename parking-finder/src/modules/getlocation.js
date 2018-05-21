function getlocation(){
    if ( navigator.geolocation )
    {
        // 現在地を取得
        navigator.geolocation.getCurrentPosition(

            // [第1引数] 取得に成功した場合の関数
            function( position )
            {
                // 取得したデータの整理
                var data = position.coords ;

                // データの整理
                var lat = data.latitude ;
                var lng = data.longitude ;
/*                var alt = data.altitude ;
                var accLatlng = data.accuracy ;
                var accAlt = data.altitudeAccuracy ;
                var heading = data.heading ;			//0=北,90=東,180=南,270=西
                var speed = data.speed ;
*/
                return {"lng": lng, "lat": lat}
/*
                // 位置情報
                var latlng = new google.maps.LatLng( lat , lng ) ;

                // Google Mapsに書き出し
                var map = new google.maps.Map( document.getElementById( 'map-canvas' ) , {
                    zoom: 15 ,				// ズーム値
                    center: latlng ,		// 中心座標 [latlng]
                } ) ;

                // マーカーの新規出力
                new google.maps.Marker( {
                    map: map ,
                    position: latlng ,
                } ) ;
*/                
            },

            // [第2引数] 取得に失敗した場合の関数
            function( error )
            {
                // エラーコード(error.code)の番号
                // 0:UNKNOWN_ERROR				原因不明のエラー
                // 1:PERMISSION_DENIED			利用者が位置情報の取得を許可しなかった
                // 2:POSITION_UNAVAILABLE		電波状況などで位置情報が取得できなかった
                // 3:TIMEOUT					位置情報の取得に時間がかかり過ぎた…

                // エラー番号に対応したメッセージ
                var errorInfo = [
                    "原因不明のエラーが発生しました…。" ,
                    "位置情報の取得が許可されませんでした…。" ,
                    "電波状況などで位置情報が取得できませんでした…。" ,
                    "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。"
                ] ;

                // エラー番号
                var errorNo = error.code ;

                // エラーメッセージ
                var errorMessage = "[エラー番号: " + errorNo + "]\n" + errorInfo[ errorNo ] ;

                return errorMessage
            } ,

            // [第3引数] オプション
            {
                "enableHighAccuracy": false,
                "timeout": 8000,
                "maximumAge": 2000,
            }

        ) ;
    }

    // 対応していない場合
    else
    {
        // エラーメッセージ
        var errorMessage = "お使いの端末は、GeoLacation APIに対応していません。" ;

        // アラート表示
        alert( errorMessage ) ;
        return errorMessage
    }
}

export default getlocation;
