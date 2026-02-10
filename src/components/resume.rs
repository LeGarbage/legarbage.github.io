use yew::prelude::*;

#[component]
pub fn Resume() -> Html {
    let resume_html =
        Html::from_html_unchecked(AttrValue::from(include_str!("../assets/resume.html")));
    html! {
        <section id="resume">
            <h2>{ "Resume" }</h2>
            {resume_html}
        </section>
    }
}
