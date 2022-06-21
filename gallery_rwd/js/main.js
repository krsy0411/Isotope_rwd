// Isotope 기능 설정
window.addEventListener("load", ()=>{
    const grid = new Isotope("section",{
        itemSelector: "article",
        columnWidth: "article",
        transitionDuration: "0.5s"
    })

    // button(li태그들 : *, .odd, .even)
    const btns = document.querySelectorAll("main ul li");

    // 반복문
    btns.forEach(btn=>{
        btn.addEventListener("click", e=>{
            // li태그에는 a태그의 링크 기능이 있으므로 미리 차단
            e.preventDefault();

            // 버튼이 활성화되어 있으면 activation 함수 안 돌도록 설정
            const isOn = e.currentTarget.classList.contains("on");
            // 반복문 탈출
            if(isOn) return;
            
            activation(e);
        })
    })

    // 버튼의 활성화 여부
    function activation(event){
        // 버튼 모두를 돌면서 활성화(on)을 삭제하고 현재 클릭하고 있는 것만 활성화
        for(let btn of btns) btn.classList.remove("on");
        event.currentTarget.classList.add("on")

        // 클릭한 버튼의 a태그 찾아내기
        const btn_a = event.currentTarget.querySelector("a");
        // a태그의 href 속성 찾아내기
        const a_href = btn_a.getAttribute("href");

        // Isotope에서 제공하는 기능 이용(필터링)
        grid.arrange({filter:a_href});
    }
})