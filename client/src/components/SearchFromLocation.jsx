import React, {Component} from 'react';

// import getlocation from '../modules/getlocation';

class SearchFromLocation extends Component{
    constructor(props){
        super(props);
        this.state = {
            lng: "",
            lat: "",
        }
    }
    handleLocSubmit(e){
        e.preventDefault();
        
        if ( navigator.geolocation ){
            // 現在地を取得
            navigator.geolocation.getCurrentPosition( position => {
                    // 取得したデータの整理
                    const data = position.coords ;
                    // データの整理
                    const lat = data.latitude ;
                    const lng = data.longitude ;
                    this.setState({lng: lng, lat: lat});
                    this.props.onSubmit(this.state.lat, this.state.lng);
                    return {"lng": lng, "lat": lat}
                
                },

                // [第2引数] 取得に失敗した場合の関数
                function( error )
                {
                    // エラー番号に対応したメッセージ
                    const errorInfo = [
                        "原因不明のエラーが発生しました…。" ,
                        "位置情報の取得が許可されませんでした…。" ,
                        "電波状況などで位置情報が取得できませんでした…。" ,
                        "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。"
                    ] ;
                    // エラー番号
                    const errorNo = error.code ;
                    // エラーメッセージ
                    const errorMessage = "[エラー番号: " + errorNo + "]\n" + errorInfo[ errorNo ] ;
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
        else {
            // エラーメッセージ
            const errorMessage = "お使いの端末は、GeoLacation APIに対応していません。" ;
            alert( errorMessage ) ;
            return errorMessage
        }
    
    }
    render(){
        return (
            <div className="centerdComponents" id="SearchFromLocation">
                <ul>
                    <li>現在地から探す</li>
                </ul>
                <form　className="subform" onSubmit={e => this.handleLocSubmit(e)}>
                    <input type="submit" value="現在地から検索" />
                </form>
            </div>
        )
    }
} 

export default SearchFromLocation;
