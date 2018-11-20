package com.balbi.marcus.estudofirebase.Jogador;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import com.balbi.marcus.estudofirebase.R;

import java.util.ArrayList;
import java.util.Map;

/**
 * Created by marcus on 02/04/16.
 */
public class JogadorListAdapter extends BaseAdapter {
    private final ArrayList mData;

    public JogadorListAdapter(Map<String, JogadorDto> map) {
        mData = new ArrayList();
        mData.addAll(map.entrySet());
    }

    @Override
    public int getCount() {
        return mData.size();
    }

    @Override
    public Map.Entry<String, JogadorDto> getItem(int position) {
        return (Map.Entry) mData.get(position);
    }

    @Override
    public long getItemId(int position) {
        // TODO implement you own logic with ID
        return 0;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        final View result;

        if (convertView == null) {
            result = LayoutInflater.from(parent.getContext()).inflate(R.layout.activity_main, parent, false);
        } else {
            result = convertView;
        }

        Map.Entry<String, JogadorDto> item = getItem(position);

        // TODO replace findViewById by ViewHolder
        ((TextView) result.findViewById(android.R.id.text1)).setText(item.getKey());
        ((TextView) result.findViewById(android.R.id.text2)).setText(item.getValue().getNome());

        return result;
    }
}
