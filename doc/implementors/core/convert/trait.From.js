(function() {var implementors = {};
implementors["tokio_current_thread"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"tokio_executor/enter/struct.EnterError.html\" title=\"struct tokio_executor::enter::EnterError\">EnterError</a>&gt; for <a class=\"struct\" href=\"tokio_current_thread/struct.RunTimeoutError.html\" title=\"struct tokio_current_thread::RunTimeoutError\">RunTimeoutError</a>",synthetic:false,types:["tokio_current_thread::RunTimeoutError"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"tokio_executor/enter/struct.EnterError.html\" title=\"struct tokio_executor::enter::EnterError\">EnterError</a>&gt; for <a class=\"struct\" href=\"tokio_current_thread/struct.BlockError.html\" title=\"struct tokio_current_thread::BlockError\">BlockError</a>&lt;T&gt;",synthetic:false,types:["tokio_current_thread::BlockError"]},];
implementors["tokio_fs"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/fs/struct.OpenOptions.html\" title=\"struct std::fs::OpenOptions\">OpenOptions</a>&gt; for <a class=\"struct\" href=\"tokio_fs/struct.OpenOptions.html\" title=\"struct tokio_fs::OpenOptions\">OpenOptions</a>",synthetic:false,types:["tokio_fs::file::open_options::OpenOptions"]},];
implementors["tokio_sync"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, TrySendError<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"tokio_sync/mpsc/error/struct.TrySendError.html\" title=\"struct tokio_sync::mpsc::error::TrySendError\">TrySendError</a>&lt;T&gt;",synthetic:false,types:["tokio_sync::mpsc::bounded::TrySendError"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, TrySendError<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"tokio_sync/mpsc/error/struct.UnboundedTrySendError.html\" title=\"struct tokio_sync::mpsc::error::UnboundedTrySendError\">UnboundedTrySendError</a>&lt;T&gt;",synthetic:false,types:["tokio_sync::mpsc::unbounded::UnboundedTrySendError"]},];
implementors["tokio_tls"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/native-tls/0.2/native_tls/struct.TlsConnector.html\" title=\"struct native_tls::TlsConnector\">TlsConnector</a>&gt; for <a class=\"struct\" href=\"tokio_tls/struct.TlsConnector.html\" title=\"struct tokio_tls::TlsConnector\">TlsConnector</a>",synthetic:false,types:["tokio_tls::TlsConnector"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/native-tls/0.2/native_tls/struct.TlsAcceptor.html\" title=\"struct native_tls::TlsAcceptor\">TlsAcceptor</a>&gt; for <a class=\"struct\" href=\"tokio_tls/struct.TlsAcceptor.html\" title=\"struct tokio_tls::TlsAcceptor\">TlsAcceptor</a>",synthetic:false,types:["tokio_tls::TlsAcceptor"]},];
implementors["tokio_trace_core"] = [{text:"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;S&gt; for <a class=\"struct\" href=\"tokio_trace_core/dispatcher/struct.Dispatch.html\" title=\"struct tokio_trace_core::dispatcher::Dispatch\">Dispatch</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"tokio_trace_core/subscriber/trait.Subscriber.html\" title=\"trait tokio_trace_core::subscriber::Subscriber\">Subscriber</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,&nbsp;</span>",synthetic:false,types:["tokio_trace_core::dispatcher::Dispatch"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
